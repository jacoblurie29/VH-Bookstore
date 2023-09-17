# VH Bookstore

# Instructions

Welcome to the JZ Online Bookstore.

We are your stakeholders, and you have been tasked to complete various tasks for us.

We were able to pay Fiverr $5 to build us a basic backend for the online bookstore.

But we now need you to help us build a frontend for this.

### Backend API

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

# Tab 1: Display total book sales

**Basic Functionality**: the user should be able to display the total amount, in dollars, of the books sold.

# Tab 2: Display bar chart of monthly sales

**Basic Functionality**: the user should be able to view a bar chart of the sales, where each bar is the total sales of that month.

# Tab 3: Create a form to add a book to the bookstore database

**Basic Functionality**: the user should be able to enter the book title, author, genre, etc. of the book and add the book to the database.

# Tab 4: Make a drag and drop bookshelves for the book sales

**Basic Functionality**: the user should to collect a list of all the books from the book sales (no repeats) and sort them by genre.

# Tab 5: Make a visual calendar for showing various metrics

**Basic Functionality**: the user should be able to choose from some filters and see the results displayed on a calendar.
