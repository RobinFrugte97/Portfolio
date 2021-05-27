'use strict'

require('dotenv').config()

const { graphql } = require('@octokit/graphql')
const fm = require('front-matter')
const fs = require('fs')

const taskList = []
const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: 'token ' + process.env.GITHUB_PERSONAL_ACCESS_TOKEN
  }
})

graphqlWithAuth(`{
  user(login: "RobinFrugte97") {
    starredRepositories {
      nodes {
        name
        description
        url
        homepageUrl
        primaryLanguage {
          name
          color
        }
        languages(first:5) {
            nodes {
              name
              color
            }
          }
        openGraphImageUrl
        updatedAt
        object(expression: "master:README.md") {
          ... on Blob {
            text
          }
        }
      }
    }
  }
}`)
  .then(result => {
    result.user.starredRepositories.nodes.map(task => {
      taskList.push(task)
    })
  })
  .catch(error => {
    console.log('GitHub API Request failed: ', error.request, '\n', error.message)
  })
  .finally(() => {
    /* Write the GraphQL result to a json-file, to be fetched inside the App.svelte component. */
    fs.writeFile('public/data.json', 
      JSON.stringify(taskList),
      function (err) {
        if (err) {
          console.error('Crap happens');
        }
      }
    );
  })
