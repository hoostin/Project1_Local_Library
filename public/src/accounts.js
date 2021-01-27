function findAccountById(accounts, id) 
{
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) 
{
  accounts.sort((acc1,acc2) => acc1.name.last.toLowerCase()>acc2.name.last.toLowerCase()? 1 : -1);
  return accounts;
}

function numberOfBorrows(account, books) 
{
    const id = account.id;
    let number = 0;
    console.log(books)
    for(let theBook of books)
    {
      console.log(theBook)
      if(theBook.borrows.some((person) => person.id === id))
      {
        number++;
      }
    }
    return number;
  
}
// returns an array of book objects checked out by given account
function currentCheckedOut(account,books)
{
  const id = account.id;
  const checkedOut = [];
  for(let theBook of books)
  {
     if(theBook.borrows.some((person) => person.id === id && !person.returned))
      {
        
          checkedOut.push(theBook);
        
     
      }
  }
 

  return checkedOut;
} 
// given an array of book objects it adds the author object to each corresponding book object
function addAuthor(books,authors)
{
  for(let theBook of books)
  {
     const authorId = theBook.authorId;
     const theAuthor = authors.find((author) => author.id === authorId);
     theBook[`author`] = theAuthor;

  }
 // console.log(books);
  return books;

}
function getBooksPossessedByAccount(account, books, authors) 
{
  // get list of books checked out by account
  const checkedOut = currentCheckedOut(account,books);
  // console.log(checkedOut);
  // go thorough list of books and add corresponding author object
  const result = addAuthor(checkedOut,authors);
 // console.log(result);
  return result;


}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
