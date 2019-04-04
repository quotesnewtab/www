<template>
  <transition name="fade">
    <div v-show="ExampleQuote" id="api" class="page">
      <scrollactive class="side-nav" :duration="200" :offset="151">
        <a href="#introduction" class="scrollactive-item">Introduction</a>
        <a href="#quotes" class="scrollactive-item">Quotes</a>
        <a href="#authors" class="scrollactive-item">Authors</a>
        <a href="#errors" class="scrollactive-item">Errors</a>
      </scrollactive>

      <div v-if="ExampleQuote" class="content">
        <section id="introduction">
          <h3>API Reference</h3>
          <div class="columns">
            <div class="left">
              <p>The Quotes New Tab API is organized around <a href="https://en.wikipedia.org/wiki/Representational_state_transfer">REST</a>. Our API has predictable resource-oriented URLs, accepts and returns <a href="http://www.json.org/">JSON-encoded</a> data, and uses standard HTTP response codes.</p>
            </div>
            <div class="right">
              <div class="card">
                <h5 class="title">Base URL</h5>
                <div class="content"><code>https://api.quotesnewtab.com</code></div>
              </div>
            </div>
          </div>
          
          <h4>Authentication</h4>
          <p>No authentication is required to use the endpoints detailed on this page, enjoy! 😄</p>

          <h4>Rate limit</h4>
          <p>We have a limit of 180 requests per minute, exceeding this limit will result in a <code>429</code> error.</p>
          <br />
          <p>You can monitor your current status by examining two HTTP headers that are returned with each request you make:</p>
          <ul>
            <li><code>X-RateLimit-Limit</code>: The maximum number of requests that can be made for the current window.</li>
            <li><code>X-RateLimit-Remaining</code>: The remaining number of requests you have left for the current window.</li>
          </ul>
        </section>
        <section id="quotes">
          <h3>Quotes</h3>
          <div class="columns">
            <div class="left">
              <p>There are three endpoints that serve quotes through the API:</p>
              <ul>
                <li>Get all quotes.</li>
                <li>Get specific quote with ID.</li>
                <li>Get a random quote.</li>
              </ul>
              <p>All endpoints return quotes in <code>Quote</code> objects.</p>
            </div>
            <div class="right">
              <div class="card">
                <h5 class="title">Endpoints</h5>
                <div class="content">
                  <p class="endpoint"><code><span>GET</span>/v1/quotes</code></p>
                  <p class="endpoint"><code><span>GET</span>/v1/quotes/:id</code></p>
                  <p class="endpoint"><code><span>GET</span>/v1/quotes/random</code></p>
                </div>
              </div>
            </div>
          </div>
          <div class="message">
            <p>Images are fetched from the '/assets/authors' folder on our domain by turning the author name into <a href="https://en.wikipedia.org/wiki/Clean_URL#Slug">slug-format</a>.</p>
            <p>E.g., <code>"{{ ExampleQuote.author }}"</code> > <code>https://quotesnewtab.com/assets/authors/{{ ExampleQuote.author.toLowerCase().replace(/\s+/g, "-").replace(/[, .]+/g, "") }}.jpg</code></p>
          </div>
          <div class="columns">
            <div class="left">
              <h4>The Quote Object</h4>
              <ul class="attributes">
                <li>Attributes</li>
                <li v-for="attribute in QuoteAttributes" :key="attribute.name">
                  <p><span class="name">{{ attribute.name }}</span><span class="type">{{ attribute.type }}</span></p>
                  <p class="description">{{ attribute.description }}</p>
                </li>
              </ul>
            </div>
            <div class="right">
              <div class="card">
                <h5 class="title">The Quote Object</h5>
                <div class="content">
                  <div class="codeblock">
                  <pre><code>
    {
      "id": {{ ExampleQuote.id }},
      "author": "{{ ExampleQuote.author }}",
      "quote": "{{ ExampleQuote.quote }}",
      "submitter": {{ ExampleQuote.submitter ? `"${ ExampleQuote.submitter }"` : `null` }}
    }
                  </code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="authors">
          <h3>Authors</h3>
          <div class="message">🚧 Under development.</div>
          <!--<div class="columns">
            <div class="left">
              <p>There are three endpoints that serve authors from the API:</p>
              <ul>
                <li>Get all authors.</li>
                <li>Get all quotes for author with name.<br/><span class="note">Name needs to be in quotations. E.g., <code>"Bob Ross"</code>.</span></li>
                <li>Get one random author and his quotes.</li>
              </ul>
              <p>The first endpoint returns all authors in an array. The other two endpoints returns <code>Quote</code> objects for the author in an array.</p>
            </div>
            <div class="right">
              <div class="card">
                <h5 class="title">Endpoints</h5>
                <div class="content">
                  <p class="endpoint"><code><span>GET</span> /v1/authors/</code></p>
                  <p class="endpoint"><code><span>GET</span> /v1/authors/:name</code></p>
                  <p class="endpoint"><code><span>GET</span> /v1/authors/random</code></p>
                </div>
              </div>
            </div>
          </div>-->
        </section>
        <section id="errors">
          <div class="columns">
            <div class="left">
              <h3>Errors</h3>
              <p>We use conventional <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">HTTP response status codes</a> to indicate the success or failure of your API requests. If your request fails, the server returns an error using the appropriate status code.
              
              In general, there are three status code ranges you can expect:</p>
              <ul>
                <li><code>2xx</code> success status codes confirm that your request worked as expected.</li>
                <li><code>4xx</code> error status codes indicate an error because of the information provided (e.g., a required parameter was omitted, an object for the parameter provided does not exist, etc.)</li>
                <li><code>5xx</code> error status codes indicate an error with our servers.</li>
              </ul>
              <p>When an error occurs during an API request, you'll get a response with an error HTTP status (in the <code>4xx</code> or <code>5xx</code> range), as well as a <code>Error</code> object in a JSON response containing more information about the error.</p>
            </div>
            <div class="right">
              <div class="card">
                <h5 class="title">HTTP Status Code Summary</h5>
                <div class="content">
                  <table>
                    <tr v-for="code in HttpStatusCodeSummary" :key="code.code">
                      <td class="font-semi-bold">{{ code.code }}</td>
                      <td class="font-semi-bold">{{ code.title }}</td>
                      <td>{{ code.description }}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="columns" style="margin-top: 30px;">
            <div class="left">
              <h4>The Error Object</h4>
              <ul class="attributes">
                <li>Attributes</li>
                <li v-for="attribute in ErrorAttributes" :key="attribute.name">
                  <p><span class="name">{{ attribute.name }}</span><span class="type">{{ attribute.type }}</span></p>
                  <p class="description">{{ attribute.description }}</p>
                </li>
              </ul>
              </div>
            <div class="right">
              <div class="card">
                <h5 class="title">The Error Object</h5>
                <div class="content">
                  <div class="codeblock">
                  <pre><code>
    {
      "error": "NOT_FOUND",
      "error_message": "No quote was found with the id: 900.",
      "status_code": 404
    }
                  </code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns" style="margin-top: 30px;">
            <div class="left">
              <h4>Common Errors</h4>
              <ul class="attributes">
                <li>Error</li>
                <li v-for="error in CommonErrors" :key="error.error">
                  <p><span class="name">{{ error.error }}</span><span class="type">{{ error.status_code }}</span></p>
                  <p class="description">{{ error.description }}</p>
                </li>
              </ul>
              </div>
            <div class="right">
              <div class="card">
                <h5 class="title">Example Errors</h5>
                <div class="content">
                  <div class="codeblock">
                  <pre><code>
    {
      "error": "NOT_FOUND",
      "error_message": "No quote was found with the id: 900.",
      "status_code": 404
    }

    ---

    {
      "error": "INCOMPLETE_DATA",
      "error_message": "Unable to perform request. Required parameter 'id' is missing.",
      "status_code": 400
    }

    ---

    {
      "error": "TOO_MANY_REQUESTS",
      "error_message": "You hit the rate limit for API calls, please wait for it to reset before trying to call again.",
      "status_code": 429
    }
                  </code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
const axios = require("axios");

export default {
  name: 'home',
  data() {
    return {
      ExampleQuote: null,
      QuoteAttributes: [
        {
          name: "id",
          type: "integer",
          description: "Unique identifier for the object."
        },
        {
          name: "author",
          type: "string",
          description: "The author of the quote."
        },
        {
          name: "quote",
          type: "string",
          description: "The quote."
        },
        {
          name: "submitter",
          type: "string / null",
          description: "The submitter of the quote."
        }
      ],
      ErrorAttributes: [
        {
          name: "error",
          type: "string",
          description: "A constant string value for what error occurred and is what you should key your error handling off of, as this string won't change depending on locale or as we change the API over time."
        },
        {
          name: "error_message",
          type: "string",
          description: "Explains what went wrong in human readable text. You could display this directly in your own interface."
        },
        {
          name: "status_code",
          type: "integer",
          description: "The HTTP status code of the response."
        }
      ],
      HttpStatusCodeSummary: [
        {
          code: "200",
          title: "OK",
          description: "Everything worked as expected."
        },
        {
          code: "400",
          title: "Bad Request",
          description: "The request was unacceptable, often due to missing a required parameter."
        },
        {
          code: "401",
          title: "Unauthorized",
          description: "No valid token provided."
        },
        {
          code: "403",
          title: "Forbidden",
          description: "You're blacklisted from using the API."
        },
        {
          code: "404",
          title: "Not Found",
          description: "The requested resource doesn't exist."
        },
        {
          code: "405",
          title: "Method Not Allowed",
          description: "The HTTP request method used is not allowed."
        },
        {
          code: "429",
          title: "Too Many Requests",
          description: "Too many requests were sent in a short period of time."
        },
        {
          code: "5xx",
          title: "Server Errors",
          description: "Something went wrong on our end."
        }
      ],
      CommonErrors: [
        {
          error: "INCOMPLETE_DATA",
          description: "The data passed through your request was incorrect or incomplete.",
          status_code: "400"
        },
        {
          error: "NOT_AUTHORIZED",
          description: "You are not authorized to access this endpoint.",
          status_code: "401"
        },
        {
          error: "BLACKLISTED",
          description: "You are banned from using the API, due to missuse.",
          status_code: "403"
        },
        {
          error: "NOT_FOUND",
          description: "The URL you gave is not valid. Or the requested item with :id was not found.",
          status_code: "404"
        },
        {
          error: "NOT_ALLOWED",
          description: "The URL you gave is valid, but the HTTP request method is not.",
          status_code: "405"
        },
        {
          error: "TOO_MANY_REQUESTS",
          description: "You sent too many requests too quickly.",
          status_code: "429"
        },
        {
          error: "INTERNAL_ERROR",
          description: "An internal error occurred in the API service. Contact support if this persists.",
          status_code: "5xx"
        }
      ]
    }
  },
  mounted() {
    axios
        .get(`${ process.env.VUE_APP_BASE_API_URL }quotes/random`)
        .then(response => {
          this.ExampleQuote = response.data;
        });
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

$side-nav-width: 180px;

.side-nav {
  height: calc(100vh - #{ $header-height + $footer-height });
  padding: 75px 20px 0 0;
  position: fixed;
  text-align: left;
  top: $header-height;
  width: $side-nav-width;

  @media screen and (max-width: $mobile) {
    display: none;
  }

  a {
    border-radius: 4px;
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    padding: 10px;

    + a {
      margin-top: 5px;
    }

    &:hover {
      border-color: transparent;
    }

    &.is-active {
      background: $primary-color;
      color: white;
    }
  }
}

.content {
  padding-left: $side-nav-width;

  @media screen and (max-width: $mobile) {
    padding-left: 0;
  }

  section {
    margin-left: 30px;
    padding: 0 0 30px;

    @media screen and (max-width: $mobile) {
      margin-left: 0;
    }

    + section {
      border-top: 1px solid lighten(lightgray, 7.5%);
      padding: 50px 0;
    }

    .columns {
      display: flex;

      .left {
        padding-right: 20px;
        width: 60%;
      }

      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;
        width: 40%;
      }

      @media screen and (max-width: $tablet) {
        display: block;

        .left, .right {
          padding: 0;
          width: 100%;
        }

        .right {
          margin-top: 20px;
        }
      }
    }

    .message {
      background: rgba($primary-color, 0.15);
      border-left: 5px solid $primary-color;
      border-radius: 5px;
      color: darken($primary-color-darker, 5%);
      margin: 30px 0;
      padding: 15px;

      a {
        color: inherit;
        text-decoration: underline;

        &:hover {
          color: $primary-color;
        }
      }
    }

    .note {
      @extend .message;
      border-width: 3px;
      border-radius: 3px;
      font-size: 14px;
      font-weight: 600;
      margin: 0;
      padding: 2px 8px 3px 6px;
    }

    .attributes {
      list-style: none;
      margin: 25px 0 0 0;
      padding: 0;

      li:first-child {
        color: #a3acb9;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.25px;
        text-transform: uppercase;
      }

      li:not(:first-child) {
        border-top: 1px solid lighten(lightgray, 7.5%);
        padding: 10px 0;

        .name {
          font-family: $monospace-font-stack;
          font-size: 14px;
          font-weight: 600;
        }

        .type {
          color: #a3acb9;
          font-size: 12px;
          font-weight: 500;
          margin-left: 10px;
        }
      }
    }

    .card {
      background: #f7fafc;
      border: 1px solid #e3e8ee;
      border-radius: 5px;
      color: #4f566b;
      font-size: 14px;
      width: 100%;

      + .card {
        margin-top: 10px;
      }

      .title {
        background: #e3e8ee;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.25px;
        padding: 10px;
        text-transform: uppercase;
      }

      .content {
        padding: 10px;

        table {
          td {
            line-height: 1.4;
            padding: 6px 5px;
          }
        }

        .codeblock {
          display: flex;
          flex-direction: row;
          margin: -10px;
          position: relative;
          
          pre {
            flex-grow: 1;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 0 10px 5px;
            white-space: pre;
          }
        }

        code {
          background: none;
          border: none;
          line-height: 1.4;
        }

        .endpoint span {
          color: $primary-color-darker;
          margin-right: 6px;
          pointer-events: none;
          user-select: none;
        }

        .common-errors {
          div {
            + div {
              margin-top: 15px;
            }

            .error {
              font-weight: 600;
            }

            .description {
              line-height: initial;
            }
          }
        }
      }
    }

    h3 {
      margin-bottom: 30px;
    }

    h4 {
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-top: 30px;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    p {
      line-height: 25px;
    }

    ul {
      list-style: initial;
      margin: 10px 0;
      padding-left: 30px;

      li {
        line-height: 25px;
        margin: 10px 0;
      }
    }

    code {
      background: #f7fafc;
      border: 1px solid #e3e8ee;
      border-radius: 4px;
      color: #4f566b;
      font-family: $monospace-font-stack;
      font-size: 14px;
      font-weight: 700;
      margin: 0 1px;
      padding: 0 4px;
      word-break: break-word;
    }
  }
}
</style>