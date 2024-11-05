import pandas as pd

# Load the CSV file with the correct delimiter and skip the first row with total values
data = pd.read_csv('/Users/mikolajzyga/4koty/src/data/age_distribution.csv', delimiter=';', skiprows=1)

# Rename columns to match the structure
data.columns = ['Age Group', 'Females', 'Males', 'Total']

# Remove spaces and convert columns to numeric
data['Females'] = pd.to_numeric(data['Females'].str.replace(' ', ''), errors='coerce')
data['Males'] = pd.to_numeric(data['Males'].str.replace(' ', ''), errors='coerce')

# Define a function to group age categories
def categorize_age_group(age_group):
    # Check if the age group contains a number
    age_str = age_group.split()[0]  # Extract the first word (e.g., "19" from "19 years")
    
    # Handle known cases for "less than 1 year" or other special labels
    if 'less than' in age_group or 'year' in age_group and age_str.isdigit() and int(age_str) <= 18:
        return '0-18'
    elif age_str.isdigit():
        age = int(age_str)
        if 19 <= age <= 69:
            return str(age)  # Treat each age as its own category
        elif age == 70:
            return '70'
        elif age > 70:
            return '70+'
    else:
        print(f"Uncategorized age group found: {age_group}")  # Debug line to check unexpected labels
    return 'Other'  # Only if no conditions are met

# Apply the categorization function to create a new column
data['Age Group Category'] = data['Age Group'].apply(categorize_age_group)

# Group by the new age categories and sum
grouped_data = data.groupby('Age Group Category').sum()

# Calculate total male and female populations for normalization
total_male_population = grouped_data['Males'].sum()
total_female_population = grouped_data['Females'].sum()

# Create normalized distributions
grouped_data['Male Distribution'] = grouped_data['Males'] / total_male_population
grouped_data['Female Distribution'] = grouped_data['Females'] / total_female_population

# Convert to JSON structures
male_distribution = grouped_data['Male Distribution'].to_dict()
female_distribution = grouped_data['Female Distribution'].to_dict()

print("Male Distribution JSON:", male_distribution)
print("Female Distribution JSON:", female_distribution)