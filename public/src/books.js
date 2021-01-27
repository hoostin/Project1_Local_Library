function findAuthorById(authors, id) 
{
 return  authors.find((author) => author.id === id);
}

function findBookById(books, id) 
{
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) 
{
  // change to for in if needed
  const returned = books.filter((book) => !book.borrows.some((borrow)=> borrow.returned === false ));
  //console.log(returned);
  const notReturned = books.filter((book) => book.borrows.some((borrow)=> borrow.returned === false ));
  return [notReturned, returned];
}
// returns account matching id given
function getAccount (id,accounts)
{
  return accounts.find((account)=> account.id === id);
}
function getBorrowersForBook(book, accounts) 
{
  const result = [];
  // get borrow array 
  for(let account of book.borrows)
  {
    if(result.length <10)
    {
      const theBorrower = getAccount(account.id,accounts);
      theBorrower[`returned`] = account.returned;
      result.push(theBorrower);
    }

  }
  // make array of accounts from borrow array adding the returned key 
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
