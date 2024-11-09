import pandas as pd
import json

# Load the CSV file with the correct delimiter and skip the first row with total values
data = pd.read_csv('/Users/mikolajzyga/4koty/src/data/age_distribution.csv', delimiter=';', skiprows=1)

# Rename columns to match the structure
data.columns = ['Age Group', 'Females', 'Males', 'Total']

# Remove spaces and convert columns to numeric
data['Females'] = pd.to_numeric(data['Females'].str.replace(' ', ''), errors='coerce')
data['Males'] = pd.to_numeric(data['Males'].str.replace(' ', ''), errors='coerce')

# Define a function to filter ages from 18 to 70
def is_age_in_range(age_group):
    try:
        age = int(age_group.split()[0])  # Extract the numeric part of the age
        return 18 <= age <= 70
    except ValueError:
        return False  # Return False for non-numeric age groups (e.g., "less than 1 year" or "total")

# Filter data to include only ages from 18 to 70
filtered_data = data[data['Age Group'].apply(is_age_in_range)]

# Calculate the total population for males and females within the age range 18-70
total_male_population_18_70 = filtered_data['Males'].sum()
total_female_population_18_70 = filtered_data['Females'].sum()

# Create normalized distributions
filtered_data['Male Distribution'] = filtered_data['Males'] / total_male_population_18_70
filtered_data['Female Distribution'] = filtered_data['Females'] / total_female_population_18_70

# Convert distributions to dictionary format for JSON output
male_distribution = dict(zip(filtered_data['Age Group'], filtered_data['Male Distribution']))
female_distribution = dict(zip(filtered_data['Age Group'], filtered_data['Female Distribution']))

# Print results in JSON format
print("Male Distribution JSON:", json.dumps(male_distribution, indent=4))
print("Female Distribution JSON:", json.dumps(female_distribution, indent=4))