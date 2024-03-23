# PlacementExercise
Placement Exercise - Connor Brock.

<ins>Web Developer - Exercise</ins>

<ins> Time Structure </ins> <br>
20-30 minutes planning. 
1 hour of development. 
10 minute reflection.

<ins>Considerations</ins> <br>
The JSON was parsed before development began to get an idea for the structure.


<ins>Plan</ins><br>
1.	Develop fetch function to parse JSON to asynchronously display content to the web page.
2.	There will be multiple different functions to implement which create differing elements for each specific part of the JSON, e.g. description, name, programs, to improve coupling (and therefore modularity).
3.	As programs is an array of objects, it’s function will require it’s own nested iteration and creation of elements. 
4.	As this is a front-end project, try and fit all the content into one web-page. We won’t have the back-end to manage interactions between URL paths, therefore developing a search function which expands information requested by the user should be high priority.
5.	Due to time constraints, you could use a CSS framework (Tailwind) to quickly style the web page for a sufficient user experience. 
6.	The first 4 elements (General, Students Union, Sport, Residences) have a different semantic meaning the the rest. The rest seems to be departments of the university. Potentially use the slice method to split these two groups up. 


<ins>Post-Development Reflection</ins><br>
**Search function is slightly flawed** - I believe it searches through and returns the descriptions of each topic, rather then just the name, as I intended. Potentially this is an issue caused by making the descriptions a child-element to the name element?\

**The search function is unefficiently written** – The function should be split into differing methods to improve the modularity of the code, right now, it handles a lot of logic inside it.\

**Front-end display of programs is flawed** - The ‘programs’ section in the JSON has it’s own structure that would need to be independently sorted and styled. Time constraints make it difficult to do this, so this would need to be addressed in further development.\

**Images are styled within the JS function, createImageElement** - More of a formatting suggestion, but potentially re factoring this into it’s own CSS class could improve the readability in further development.\

**Semantic Tagging of HTML elements** - Semantic tagging should be enhanced in further development, to aid the ability for screen readers to parse over the webpage effectively.\
