
### Enhancement Functionality

<details>
<summary>Functionality to be added</summary>
- Implement a `Pagination` in **Popular Movies Page**, **Top Rated Movies Page**, and **Upcoming Movies Page**.
- The pagination feature includes a `Prev` button, a `Next` button, and a `page number` starting with number **1**.
- When the `Next` button or the `Prev` button is clicked, make an HTTP GET request to the API Url with the query parameter page and the page number as its value.
- Follow <a href="https://developer.themoviedb.org/reference/movie-popular-list" target="_blank_">this</a> reference for more detiails of pagination.
- Ensure your application maintains good CSS styling.
</details>

### Setup Instructions

<details>
<summary>Follow these steps before starting to code for this project. (**Important**)</summary>

- After setting up this project delete the `README.md` file in the CCBP IDE.
- Clone the existing <a href="https://learning.ccbp.in/question/1c277f98-14f6-4744-aad9-c1021526e442" target="_blank_">Movie Database</a> code from your GitHub account to add new functionalities to it.
  - If the existing <a href="https://learning.ccbp.in/question/1c277f98-14f6-4744-aad9-c1021526e442" target="_blank_">Movie Database</a> code is not available in your git, push your code to git.
    - <a href="https://learning.ccbp.in/3da6f1a6-0892/course?c_id=ade6e642-cd5c-4896-9edd-3f06d3dc2069&s_id=49896a46-f484-4b42-b459-2626f77e6796&t_id=9f27b553-4bbe-400f-9025-9044f79acda0" target="_blank_">Click here to learn how to push your code to git</a>
  - Once the code is pushed to git, clone it into this project using the below command.

```cmd
git clone {git repository URL} /home/workspace/reactjs/coding-practices/enhancementOfMovieDatabaseApp
```

<MultiLineNote>
In the above command, replace this `{git repository URL}` with your actual Git URL.
</MultiLineNote>
- Download dependencies by running `npm install`
- Start up the app using `npm start`
- Deploy the project on <a href="https://vercel.com/" target="_blank_">Vercel</a> and submit your project using the Vercel link. 
</details>

<MultiLineNote>

- Cloning the existing <a href="https://learning.ccbp.in/question/1c277f98-14f6-4744-aad9-c1021526e442" target="_blank_">Movie Database</a> repo is mandatory, as test cases are added for both the existing Movie Database App and the new functionality.
- These projects are introduced to help you prepare well for similar questions asked during interviews. </MultiLineNote>
