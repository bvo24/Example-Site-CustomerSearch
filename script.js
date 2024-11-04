function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function searchCustomer(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value;

    // Here you could fetch real data or perform a search on sample data
    const sampleData = [
        { id: 'CUST123456', name: 'John Doe', phone: '(555) 555-1234', email: 'johndoe@email.com' },
        { id: 'CUST654321', name: 'Jane Smith', phone: '(555) 555-5678', email: 'janesmith@email.com' }
    ];

    const results = sampleData.filter(
        customer => customer.id.includes(searchTerm) || 
                    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    customer.phone.includes(searchTerm)
    );

    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = results.length > 0 
        ? results.map(customer => `
            <div>
                <p><strong>ID:</strong> ${customer.id}</p>
                <p><strong>Name:</strong> ${customer.name}</p>
                <p><strong>Phone:</strong> ${customer.phone}</p>
                <p><strong>Email:</strong> ${customer.email}</p>
            </div><hr>
        `).join('')
        : '<p>No results found</p>';
}
