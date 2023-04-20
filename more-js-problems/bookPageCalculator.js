
function pageCalculator(book1Quantity, book2Quantity, book3Quantity) {
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;

    const book1TotalPages = book1Page * book1Quantity;
    const book2TotalPages = book2Page * book2Quantity;
    const book3TotalPages = book3Page * book3Quantity;

    const totalPages = book1TotalPages + book2TotalPages + book3TotalPages;
    return totalPages;
}

let totalPagesRequires = pageCalculator(20, 4, 30);
console.log("Total Page:", totalPagesRequires);