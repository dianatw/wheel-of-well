document.addEventListener('DOMContentLoaded', function () {
    // Form submission event listener
    document.getElementById('evaluationForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(this);

        // Process form data
        const pillarData = [];
        formData.forEach((value, key) => {
            pillarData.push({ [key]: parseInt(value) });
        });

        // Calculate total score for each pillar
        const pillarScores = [];
        pillarData.forEach(pillar => {
            let totalScore = 0;
            for (const key in pillar) {
                totalScore += pillar[key];
            }
            pillarScores.push(totalScore);
        });

        // Display results using Chart.js
        displayResults(pillarScores);
    });

    // Function to display results using Chart.js
    function displayResults(scores) {
        const labels = ['Physical Wellness', 'Emotional Wellness', 'Mental/Intellectual Wellness', 'Social Wellness', 'Spiritual Wellness', 'Occupational Wellness', 'Environmental Wellness', 'Financial Wellness'];

        // Create a chart
        const ctx = document.getElementById('wellnessWheel').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: scores,
                    backgroundColor: [
                        'red', 'blue', 'green', 'orange', 'purple', 'yellow', 'cyan', 'magenta'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
});
