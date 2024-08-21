
const users = [];

// add user to `users` array here
users.push(
    { id: 1, first_name: 'Timi', last_name: 'Twelvetree', email: 'rtwelvetree0@prnewswire.com'},
    { id: 2, first_name: 'North', last_name: 'Keble', email: 'nkeble1@marriott.com'},
    { id: 3, first_name: 'Astra', last_name: 'Toderbrugge', email: 'atoderbrugge2@plala.or.jp'},
    { id: 4, first_name: 'Wilie', last_name: 'Daltry', email: 'wdaltry3@hexun.com'},
    { id: 5, first_name: 'Libby', last_name: 'McGillivrie', email: 'lmcgillivrie4@gnu.org'},
    { id: 6, first_name: 'Bertina', last_name: 'Perulli', email: 'bperulli5@hugedomains.com'},
    { id: 7, first_name: 'Yorker', last_name: 'Itzakson', email: 'yitzakson6@webnode.com'},
    { id: 8, first_name: 'Ralf', last_name: 'Bruna', email: 'rbruna7@bandcamp.com'},
    { id: 9, first_name: 'Shell', last_name: 'Matiewe', email: 'smatiewe8@zimbio.com'},
    { id: 10, first_name: 'Reynold', last_name: 'Pevie', email: 'rpevie9@freewebs.com'},

)
// console.log(users)
 


const find_user = id => {
    // finish this function here
    const user = users.find(user => user.id === id);
    return user? user: null;
   

}




// you can test your code here
console.log(find_user(11));







// DO NOT REMOVE THIS
export {users, find_user}