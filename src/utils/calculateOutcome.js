import maleData from './data/malePopulationData.json';
import femaleData from './data/femalePopulationData.json';

export function calculateMatchingPercentage(data, ageRange, maritalStatus, isNonObese, minHeight, minIncome) {
    // Extract total population
    const totalPopulation = data.total_population;
    if (!totalPopulation || totalPopulation <= 0) {
        throw new Error('Invalid total population value in data.');
    }

    // Calculate age percentage
    const ageDistribution = data.ageDistribution;
    const ageKeys = Array.from({ length: ageRange[1] - ageRange[0] + 1 }, (_, i) => (ageRange[0] + i).toString());
    const agePercentage = ageKeys.reduce((sum, key) => sum + (ageDistribution[key] || 0), 0);
    if (agePercentage === 0) {
        throw new Error('No age data matches the selected range.');
    }

    // Get marital status percentage
    const maritalStatusPercentage = data.maritalStatus[maritalStatus];
    if (!maritalStatusPercentage) {
        throw new Error('Invalid marital status input.');
    }

    // Get obesity percentage
    const obesityPercentage = isNonObese ? data.obesityRates.nonObese : data.obesityRates.obese;
    if (obesityPercentage === undefined) {
        throw new Error('Invalid obesity data.');
    }

    // Get height percentage
    const heightThresholds = data.heightDistribution;
    const heightPercentage = Object.entries(heightThresholds).find(([key]) => parseInt(key.split('_')[1], 10) >= minHeight)?.[1] || 0;
    if (heightPercentage === 0) {
        throw new Error('Invalid height threshold provided.');
    }

    // Get income percentage
    const incomeThresholds = data.incomeDistribution;
    const incomePercentage = Object.entries(incomeThresholds).find(([key]) => parseInt(key.split('_')[1], 10) >= minIncome)?.[1] || 0;
    if (incomePercentage === 0) {
        throw new Error('Invalid income threshold provided.');
    }

    // Combine percentages
    const matchingPercentage = agePercentage * maritalStatusPercentage * obesityPercentage * heightPercentage * incomePercentage;

    // Return as a percentage
    return matchingPercentage * 100;
}