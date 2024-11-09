// Import the datasets
import maleData from '../data/malePopulationData.json';
import femaleData from '../data/femalePopulationData.json';


export function calculateOutcome({
    gender,
    excludeObese,
    excludeMarried,
    ageRange,
    minHeight,
    minIncome
}) {
    // Select the appropriate dataset based on gender
    const data = gender === 'male' ? maleData : femaleData;
    let population = data.total_population;

    console.log("Initial Population:", population);

    // 1. Age Filtering
    const ageDistribution = data.ageDistribution;
    // Generate age keys with " years" suffix for the specified range
    const ageKeys = Array.from({ length: ageRange[1] - ageRange[0] + 1 }, (_, i) => `${ageRange[0] + i} years`);
    // Sum up the proportions for the specified age range
    const ageProportion = ageKeys.reduce((sum, key) => sum + (ageDistribution[key] || 0), 0);
    // Apply the age filter to the population
    population *= ageProportion;
    // Save the filtered population after age filter
    const ageFilteredPopulation = population;

    console.log("After Age Filter:", population);

    // 2. Marital Status Filter
    if (excludeMarried) {
        const singleProportion = data.maritalStatus.single;
        population *= singleProportion;
        console.log("After Marital Status Filter:", population);
    }

    // 3. Obesity Filter
    if (excludeObese) {
        const nonObeseProportion = data.obesityRates.nonObese;
        population *= nonObeseProportion;
        console.log("After Obesity Filter:", population);
    }

    // 4. Height Filter
    const heightDistribution = data.heightDistribution;
    let heightProportion = 0;

    for (let i = 0; i < heightDistribution.length; i++) {
        if (heightDistribution[i].height >= minHeight) {
            heightProportion = 1 * heightDistribution[i].cumulativePercentage;
            break;
        }
    }

    population *= heightProportion;
    console.log("After Height Filter:", population);

    // 5. Income Filter
    const incomeDistribution = data.incomeDistribution;
    let incomeProportion = 0;

    for (let i = 0; i < incomeDistribution.length; i++) {
        if (incomeDistribution[i].income >= minIncome) {
            incomeProportion = 1 * incomeDistribution[i].cumulativePercentage;
            break;
        }
    }

    population *= incomeProportion;
    console.log("After Income Filter:", population);

    // Final Matching Percentage
    const finalMatchingPercentage = (population / data.total_population) * 100;
    const ageGroupMatchingPercentage = (population / ageFilteredPopulation) * 100;
    const exactPopulationCount = Math.round(population);
    console.log("Final Matching Percentage:", finalMatchingPercentage);
    console.log("Age group Matching Percentage:", ageGroupMatchingPercentage);
    console.log("Exact Population Count:", exactPopulationCount);

      return { finalMatchingPercentage, ageGroupMatchingPercentage, exactPopulationCount };
}