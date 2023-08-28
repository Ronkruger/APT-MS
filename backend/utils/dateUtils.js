export function calculateDueDate(moveInDate) {
    if (moveInDate) {
        const moveIn = new Date(moveInDate);
        const nextMonth = new Date(moveIn);
        nextMonth.setMonth(nextMonth.getMonth() + 1);

        const year = nextMonth.getFullYear();
        const month = String(nextMonth.getMonth() + 1).padStart(2, '0');
        const day = String(nextMonth.getDate()).padStart(2, '0');

        return `${month}/${day}/${year}`; // Format as MM/DD/YYYY
    }
    return null; // Handle the case when no move-in date is provided
}