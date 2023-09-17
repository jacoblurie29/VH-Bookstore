# VH Bookstore

# Instructions

Welcome to the JZ Online Bookstore.

We are your stakeholders, and you have been tasked to complete various tasks for us.

We were able to pay Fiverr $5 to build us a basic backend for the online bookstore.

But we now need you to help us build a frontend for this.

### Prerequisites

-   `node`
-   `npm`
-   A curious mind

### Setup steps

1. clone this repo

```
git clone https://github.com/jacoblurie29/VH-Bookstore
```

2. install packages

```
npm i
```

3. run development mode

```
npm run dev
```

4. duplicate `.env.template` and rename it to `.env`. then fill in the values

### Best practices

1. Good coding practices
2. Document your code
3. Git commit often in your own branches

```
git pull
git checkout -b <new_branch_name>
git add <file>
git commit -m "Write informative commit message here"
git push --set-upstream-origin <new_branch_name>
```

---

## Tab 1: Display total book sales

**Basic Functionality**: The user should be able to display the total amount, in dollars, of the books sold.

**Bonus Feature**: The user should be able to filter the total amount by genre using a dropdown menu. Default should be all genres.

**Hint**: How many states do you need to keep track of?

**Where to start**: `src/tabs/BookSales.js`

## Tab 2: Display bar chart of monthly sales

**Basic Functionality**: The user should be able to view a bar chart of the sales, where each bar is the total sales of that month.

**Bonus Feature**: The user should be able to filter the bar chart by genre using a dropdown menu. Default should be all genres.

**Hint**: Is there a package that can help you with this? How do you know if it is a good package?

**Where to start**: `src/tabs/MonthlySales.js`

## Tab 3: Create a form to add a book to the bookstore database

**Basic Functionality**: The user should be able to enter the book title, author, genre, etc. of the book and add the book to the database.

**Bonus Feature**: The user should not be allowed to enter invalid data. For example, the user should not be able to enter a negative cost, an invalid email, etc.

**Hint**: Is there a package that can help you with this? Is the package easy to use?

**Where to start**: `src/tabs/AddBook.js`

## Tab 4: Make a drag and drop bookshelves for the book sales

**Basic Functionality**: The user should be able to re-classify the genre of the books using a drag and drop interface.

**Bonus Feature**: The modified books should be saved to the database automatically with each drag and drop.

**Hint**: Look up packages like `react-dnd` or `dnd-kit` to get started.

**Where to start**: `src/tabs/Bookshelf.js`

## Tab 5: Make a visual calendar for showing various metrics

**Basic Functionality**: The user should be able to choose from some filters and see the results displayed on a visual calendar, where each day is a square containing the metric of that day.

The filters should be:

-   number of books sold on each day
-   total sales of books each day

**Bonus Feature**: The numbers displayed on the each squares should be automatically colored / shaded based on the value of the metric relative to the other days.

For example, if the minimum books sold of the month is 0, maximum is 10, and the current day has 5 books sold, then this square should be colored halfway between the minimum and maximum color (up to you to decide what the colors are).

---

# Backend API

These are the following backend API endpoints.

The implementation of these endpoints can be found in `server/server.js`.

[GET] `/getBookSales`

-   gets an array of BookSale(s)

```ts
interface BookSale = {
    title: string;
    author: string;
    cost: number;
    genre: string;
    purchaserName: string;
    purchaserEmail: string;
    saleDate: string;
}
```

[POST] `/addBookSale`

-   adds a book to the database

[PUT] `/updateBookSale`

-   updates a book sale

[DELETE] `/deleteBookSale`

-   deletes a book sale
