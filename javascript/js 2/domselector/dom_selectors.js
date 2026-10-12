/*
=========================================================
📘 JavaScript DOM Manipulation Notes
=========================================================

DOM = Document Object Model

JavaScript uses DOM to:

✔️ Select HTML elements
✔️ Change text
✔️ Change styles
✔️ Add/remove classes
✔️ Access attributes
✔️ Manipulate HTML dynamically

Think of DOM as:

JavaScript controlling HTML.

=========================================================
1️⃣ Selecting Elements using `getElementById()`
=========================================================

HTML:

<h1 id="title" class="heading">
    i am learning DOM
</h1>
*/

document.getElementById('title');

/*
Explanation:

`getElementById()`
selects element by id.

Example:

document.getElementById('title')

Output:

<h1 id="title">...</h1>

---------------------------------------------------------
Store element in variable
---------------------------------------------------------
*/

const title = document.getElementById('title');

console.log(title);

/*
Why store in variable?

Because repeatedly writing:

document.getElementById('title')

is long.

Instead:

title

is easier.

=========================================================
2️⃣ Accessing `id` and `class`
=========================================================
*/

document.getElementById('title').id;
// Output: "title"

document.getElementById('title').className;
// Output: "heading"

/*
Explanation:

.id
→ returns id

.className
→ returns class

Example:

title.id
title.className

=========================================================
3️⃣ Changing Attributes
=========================================================
*/

title.setAttribute('class', 'test');

/*
Explanation:

`setAttribute()`

Used to set or overwrite attributes.

Syntax:

element.setAttribute(attribute, value)

Example:

title.setAttribute('class', 'test')

Before:
class="heading"

After:
class="test"

Important:

It overwrites previous class.

=========================================================
4️⃣ Changing CSS using `.style`
=========================================================
*/

title.style.backgroundColor = 'green';

title.style.padding = '15px';

title.style.borderRadius = '15px';

/*
Explanation:

JavaScript can modify CSS.

Syntax:

element.style.property = value

Examples:

backgroundColor
borderRadius

Notice:

background-color ❌

backgroundColor ✅

Reason:

JavaScript uses camelCase.

---------------------------------------------------------
Why this gave error?
---------------------------------------------------------

Wrong:

title.style.padding = 15px ❌

Error:
SyntaxError

Reason:

CSS values must be strings.

Correct:

title.style.padding = "15px" ✅

=========================================================
5️⃣ Difference:
`innerHTML`, `innerText`, `textContent`
=========================================================
*/

title.innerHTML;

/*
Output:

i am learning DOM
<span style="display:none">
test text
</span>

Explanation:

Returns complete HTML.

Includes hidden elements.
*/

title.innerText;

/*
Output:

i am learning DOM

Explanation:

Returns only visible text.

Hidden text NOT included.
*/

title.textContent;

/*
Output:

i am learning DOM test text

Explanation:

Returns all text.

Even hidden text included.

---------------------------------------------------------
Difference Summary
---------------------------------------------------------

innerHTML
→ Full HTML

innerText
→ Visible text only

textContent
→ All text

=========================================================
6️⃣ `getElementsByClassName()`
=========================================================
*/

document.getElementsByClassName('heading');

/*
Output:

HTMLCollection

Explanation:

Selects elements by class.

Returns:

HTMLCollection

NOT array.

Example:

HTMLCollection [h1]

=========================================================
7️⃣ `querySelector()`
=========================================================
*/

/*
Select first h2
*/
document.querySelector('h2');

/*
Select by id
*/
document.querySelector('#title');

/*
Select by class
*/
document.querySelector('.heading');

/*
Select input type=password
*/
document.querySelector('input[type="password"]');

/*
Select ul
*/
document.querySelector('ul');

/*
Explanation:

querySelector()

Returns:
FIRST matching element.

Very powerful selector.

Uses CSS selectors.

Examples:

#id
.class
tagName
attribute selectors

=========================================================
8️⃣ Selecting Child Element
=========================================================
*/

const myul = document.querySelector('ul');

myul.querySelector('li');

/*
Explanation:

Selects first li
inside ul.
*/

const turngreen = myul.querySelector('li');

turngreen.style.backgroundColor = 'green';

turngreen.innerText = 'first';

/*
Explanation:

Changed:

background color
text

Before:
one

After:
first

=========================================================
9️⃣ `querySelectorAll()`
=========================================================
*/

document.querySelectorAll('li');

/*
Output:

NodeList(4)

Explanation:

Returns:

NodeList

Can access using index.

Example:
*/

const templilist = document.querySelectorAll('li');

templilist[0].style.color = 'green';

/*
Change all list item colors
*/

templilist.forEach((li) => {

    li.style.backgroundColor = 'green';
});

/*
Explanation:

NodeList supports:

forEach()

So we can loop directly.

---------------------------------------------------------
Why this gave error?
---------------------------------------------------------

Wrong:

templilist.style.color = "green"

Error:

Cannot set properties of undefined

Reason:

templilist is multiple elements.

Need specific element:

templilist[0]

OR loop through all.

=========================================================
🔟 HTMLCollection vs NodeList
=========================================================
*/

/*
querySelectorAll()
→ NodeList

getElementsByClassName()
→ HTMLCollection
*/

document.getElementsByClassName('list-item');

/*
Output:

HTMLCollection(4)

Important:

HTMLCollection is NOT array.

Cannot directly use:

forEach()

Need conversion.

=========================================================
1️⃣1️⃣ Convert HTMLCollection to Array
=========================================================
*/

const tempclasslist =
    document.getElementsByClassName('list-item');

const myarrrr =
    Array.from(tempclasslist);

/*
Explanation:

Array.from()

Converts:

HTMLCollection
➡️ Array

Then array methods work.
*/

myarrrr.forEach(function (li) {

    li.style.color = 'orange';
});

/*
---------------------------------------------------------
Why this error happened?
---------------------------------------------------------

Wrong:

myarrr.forEach()

Error:

ReferenceError:
myarrr is not defined

Reason:

Variable name mistake.

Created variable:

myarrrr

But wrote:

myarrr

Spelling mismatch ❌

Correct:

myarrrr.forEach()

=========================================================
📌 Difference:
NodeList vs HTMLCollection
=========================================================

NodeList
-------------------------
✔️ Returned by:
querySelectorAll()

✔️ Supports:
forEach()

Example:

document.querySelectorAll('li')

-------------------------

HTMLCollection
-------------------------
✔️ Returned by:
getElementsByClassName()

❌ No forEach()

Need:

Array.from()

Example:

Array.from(collection)

=========================================================
📌 Important DOM Methods Summary
=========================================================

1. getElementById()
   → Select by id

2. getElementsByClassName()
   → Select by class

3. querySelector()
   → First matching element

4. querySelectorAll()
   → All matching elements

5. setAttribute()
   → Change attributes

6. .style
   → Change CSS

7. innerHTML
   → Full HTML

8. innerText
   → Visible text

9. textContent
   → All text

10. Array.from()
   → Convert collection to array

=========================================================
*/