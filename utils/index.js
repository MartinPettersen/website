export const sortByDate = (a, b) => {
    return new Date(b.blogData.date) - new Date(a.blogData.date)
}