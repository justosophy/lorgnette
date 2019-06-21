import type { ApiResponse } from "./types";

const IMAGE_URL =
  "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibG9nbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9ImhzbGEoMjIwLCAxMyUsIDUlLCAwLjc1KSIgZD0iTTExIDVDOS4wMzIgNSA3LjQ2IDYuNDQgNy4xMjUgOC4zMTNjLTEuODkuNDc2LTMuNTMgMS43MDUtNC4yNSAzLjY1NmgtLjAzTC43MTggMTcuOTM2Qy4yNjUgMTguODYzIDAgMTkuOTA0IDAgMjFjMCAzLjg1NCAzLjE0NiA3IDcgNyAzLjQ3MiAwIDYuMzY1LTIuNTUyIDYuOTA2LTUuODc1LjU0My41MzUgMS4yOC44NzUgMi4wOTQuODc1LjgxNCAwIDEuNTUtLjM0IDIuMDk0LS44NzVDMTguNjM0IDI1LjQ0OCAyMS41MjggMjggMjUgMjhjMy44NTQgMCA3LTMuMTQ2IDctNyAwLS45NzQtLjItMS45MDYtLjU2My0yLjc1bC0yLjI4LTYuMzc1LS4wMzItLjAzdi0uMDMzYy0uNzMtMS43Ny0yLjM0OC0zLjAxMi00LjI1LTMuNUMyNC41NCA2LjQ0MiAyMi45NjggNSAyMSA1Yy0xLjg1NyAwLTMuMzYyIDEuMjg1LTMuODEzIDNoLTIuMzc1Yy0uNDUtMS43MTUtMS45NTUtMy0zLjgxMi0zem0wIDJjMS4xOSAwIDIgLjgxIDIgMnYxaDZWOWMwLTEuMTkuODEtMiAyLTJzMiAuODEgMiAydi45MDZsLjkwNi4wOTRjMS40ODYuMTU2IDIuNzY2IDEuMTkyIDMuMzQ0IDIuNTMuMDEuMDIyLjAyMi4wNDIuMDMuMDY0bC43NSAyLjEyNWMtLjkxOC0uNDQ2LTEuOTQ0LS43Mi0zLjAzLS43Mi0yLjkyNCAwLTUuNDI1IDEuODE3LTYuNDcgNC4zNzVDMTcuOTk2IDE3LjU0NSAxNy4wNTQgMTcgMTYgMTdjLTEuMDUzIDAtMS45OTUuNTQ0LTIuNTMgMS4zNzVDMTIuNDI0IDE1LjgxNyA5LjkyMyAxNCA3IDE0Yy0xLjA3MiAwLTIuMDkuMjUzLTMgLjY4OGwuNzUtMi4wMzJ2LS4wM2MuNTgtMS41NSAxLjgwOC0yLjQ2NCAzLjM0NC0yLjYyNkw5IDkuOTA2VjljMC0xLjE5LjgxLTIgMi0yem0tNCA5YzIuNzczIDAgNSAyLjIyNyA1IDVzLTIuMjI3IDUtNSA1LTUtMi4yMjctNS01YzAtLjcwOC4xNzUtMS4zNi40MzgtMS45Ny4wMTYtLjAzNy4wMTMtLjA4Ni4wMy0uMTI0QzMuMjYgMTcuMTkyIDQuOTggMTYgNyAxNnptMTggMGMyLjc3MyAwIDUgMi4yMjcgNSA1cy0yLjIyNyA1LTUgNS01LTIuMjI3LTUtNSAyLjIyNy01IDUtNXptLTkgM2MuNTY0IDAgMSAuNDM2IDEgMSAwIC41NjQtLjQzNiAxLTEgMS0uNTY0IDAtMS0uNDM2LTEtMSAwLS41NjQuNDM2LTEgMS0xeiI+PC9wYXRoPjxjaXJjbGUgY2xhc3M9ImxvZ28tY2lyY2xlLWV5ZSIgY3g9IjciIGN5PSIyMSIgcj0iMyIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSIjMDA2M0RDIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPSJsb2dvLWNpcmNsZS1leWUiIGN4PSIyNSIgY3k9IjIxIiByPSIzIiBzdHJva2Utd2lkdGg9IjAiIGZpbGw9IiNGRjAwODQiPjwvY2lyY2xlPjwvc3ZnPg==";

const exampleAPIResponse: ApiResponse = {
  items: [
    {
      author: "Lorem ipsum",
      author_id: "qwerty@uiop",
      date_taken: "string",
      link: "https://www.flickr.com",
      tags:
        "irure occaecat sint tempor quis fugiat incididunt cillum amet dolor anim nostrud",
      media: { m: IMAGE_URL },
      title: "Some image"
    },
    {
      author: "Dolor sit",
      author_id: "asdfg@hkl",
      date_taken: "string",
      link: "https://www.flickr.com",
      tags:
        "cupidatat proident in laboris reprehenderit ex id aliquip enim tempor consequat",
      media: { m: IMAGE_URL },
      title: "Another image"
    }
  ]
};

const exampleInvalidAPIResponse: Object = {
  items: [
    {
      foo: "bar"
    },
    {
      apple: "pie"
    }
  ]
};

export { exampleAPIResponse, exampleInvalidAPIResponse };
