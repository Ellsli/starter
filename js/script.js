const pageSize=10;
const ul_list = document.getElementById('userslist');
  const total = document.getElementById('total');
  total.innerHTML += users.length;

function getdata( pagedataset = [] ) 
{
  ul_list.innerHTML='';
 
  for (i = 0; i < pagedataset.length; i++) {
    ul_list.innerHTML += `
    <li class="contact-item cf">
        <div class="contact-details">
            <img class="avatar" src=${pagedataset[i].image}>
            <h3>${pagedataset[i].name
      }</h3>
            <span class="email">${pagedataset[i].name.replace(' ', '.')}@example.com</span>
        </div>
        <div class="joined-details">
               <span class="date">Joined ${pagedataset[i].joined}</span>
       </div>
    </li>

  ` }
}
relaventpagedata(1);
function relaventpagedata(pagenumber)
{

  let start=(pagenumber*pageSize)-pageSize;
let end=pagenumber*pageSize;
const user = users.slice(start,end);
getdata(user)
}


