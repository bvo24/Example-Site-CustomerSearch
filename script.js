function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = (section.style.display === "none" || section.style.display === "") ? "block" : "none";
}

function searchCustomer(event) {
    event.preventDefault();
    const searchInput = document.getElementById("search-input").value;
    const searchResults = document.getElementById("search-results");

    // Placeholder search results based on input
    searchResults.innerHTML = `<p>Results for "${searchInput}":</p><p>Customer Name: John Doe</p><p>Customer ID: CUST123456</p><p>Phone: (555) 555-1234</p>`;
}
