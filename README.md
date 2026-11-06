# <a href="https://kalyanm45.github.io/BlogBoard-AI-Blog-Generator/">BlogBoard — Autonomous AI Article Generator</a>

<p align="center"> <img src="https://img.shields.io/github/license/KalyanM45/BlogBoard-AI-Blog-Generator?style=ROUND" alt="License" /> <img src="https://img.shields.io/github/stars/KalyanM45/BlogBoard-AI-Blog-Generator?style=ROUND" alt="Stars" /> <img src="https://img.shields.io/github/forks/KalyanM45/BlogBoard-AI-Blog-Generator?style=ROUND" alt="Forks" /> <img src="https://img.shields.io/github/issues/KalyanM45/BlogBoard-AI-Blog-Generator?style=ROUND"alt="Issues" />
</p>

## About The Project

BlogBoard is an end-to-end, fully automated blogging platform. It autonomously schedules, writes, formats, and publishes deep-dive technical articles on Machine Learning and Artificial Intelligence directly to a fast, static frontend website.

Powered by **LangGraph** for stateful workflow execution and **Groq** for blazing-fast LLM inference, it ensures that high-quality, zero-fluff, production-grade articles are generated and deployed automatically via **GitHub Actions**.

## Library Requirements

 - Python 3.13+
 - uv (for dependency management)

## Deploy the Website to Vercel

The website is a static frontend in `blogboard/web`. The included `vercel.json`
serves that directory directly; no build command or Vercel environment variables
are required. Article indexes and markdown files are loaded from the public
Cloudflare R2 URL configured in `blogboard/web/js/config.js`.

1. Import this project into Vercel from your Git provider.
2. If the project is inside a larger repository, set **Root Directory** to
   `BlogBoard-AI-Blog-Generator` (the directory containing this README and
   `vercel.json`). Otherwise, use the repository root.
3. Keep the **Framework Preset** set to **Other**. The build command and output
   directory are already configured in `vercel.json`.
4. Deploy. Vercel serves `blogboard/web/index.html` and its sibling assets.

The frontend configuration contains only the public R2 URL, not credentials.
If you use a different bucket, update `R2_PUBLIC_URL` in
`blogboard/web/js/config.js` to its public URL before deploying. The bucket must
allow public reads (including browser CORS requests).

The Python article-generation workflow is separate from the website and is not
deployed as a Vercel API or function. It still needs its own Python environment
and secret API credentials.

### Automatically publish one article per week

The GitHub Actions workflow in `.github/workflows/weekly-article.yml` generates
and publishes one tutorial article every Monday at 8:00 AM India Standard Time.
It chooses the least recently updated tutorial category. The workflow can also
be started manually from the repository's **Actions** tab.

Before enabling it, add these repository **Actions secrets** under
**Settings → Secrets and variables → Actions**:

- `LLM__API_KEY`
- `R2__ACCOUNT_ID`
- `R2__ACCESS_KEY_ID`
- `R2__SECRET_ACCESS_KEY`
- `R2__BUCKET_NAME`
- `CONTENT__TAVILY_API_KEY`
- `CONTENT__GUARDIAN_API_KEY`
- `CONTENT__UNSPLASH_API_KEY`

These are private backend credentials; do not put them in website JavaScript or
commit them to the repository. The workflow uploads new article content and its
category index to R2, which the website reads. Deploy the site to Vercel
separately. This schedule adds about 52 articles per year; it does not create
10,000 articles immediately.

## Run the Website Locally

Preview the static website from the project directory:

```bash
python -m http.server 8000 --directory blogboard/web
```

Open `http://localhost:8000`.

## Run the Article Generator

Follow these steps to install and set up the project directly from the GitHub repository:

1. **Clone the Repository**
   - Open your terminal or command prompt.
   - Navigate to the directory where you want to install the project.
   - Run the following command to clone the GitHub repository:
     ```bash
     git clone https://github.com/KalyanM45/BlogBoard-AI-Blog-Generator.git
     ```

2. **Create a Virtual Environment** (Recommended)
   - It's a good practice to create a virtual environment to manage project dependencies. Run the following command:
     ```bash
     uv venv
     ```

3. **Activate the Virtual Environment**
   - Activate the virtual environment based on your operating system:
       ```bash
       # On Linux/Mac:
       source .venv/bin/activate
       # On Windows:
       .venv\Scripts\activate
       ```

4. **Install Dependencies**
   - Navigate to the project directory:
     ```bash
     cd BlogBoard-AI-Blog-Generator
     ```
   - Run the following command to install project dependencies:
     ```bash
     uv sync
     ```

5. **Run the Project**
   - Start the backend pipeline by running the appropriate command:
     ```bash
     uv run python blogboard/run.py
     ```

6. **Access the Project**
   - Serve the frontend locally using Python's built-in HTTP server:
     ```bash
     python -m http.server 8000 --directory blogboard/web
     ```
   - Open a web browser and navigate to `http://localhost:8000`.


## Generator Credentials

The static website does not need API credentials. To run the separate article
generator, copy `.env.example` to `.env` and supply the required Groq, Cloudflare
R2, and content-provider credentials. Keep `.env` private and never add secrets
to frontend JavaScript or commit them to the repository.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

• **Report bugs**: If you encounter any bugs, please let us know. Open up an issue and let us know the problem.

• **Contribute code**: If you are a developer and want to contribute, follow the instructions below to get started!

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

• **Suggestions**: If you don't want to code but have some awesome ideas, open up an issue explaining some updates or improvements you would like to see!

#### Don't forget to give the project a star! Thanks again!

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.<br>

## Acknowledgements

We'd like to extend our gratitude to all individuals and organizations who have played a role in the development and success of this project. Your support, whether through contributions, inspiration, or encouragement, has been invaluable. Thank you for being a part of our journey.