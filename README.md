# Vondel Frontend - Angular + Ionic

This repository contains the **frontend** of the Vondel project, built with **Angular** and **Ionic**.

It can be run **locally** with Node.js or inside **Docker** for a full-stack development environment.

---

## 1. Requirements

* Node.js >= 18
* npm >= 9
* Optional: Ionic CLI (`npm install -g @ionic/cli`)
* Docker (for containerized development)

---

## 2. Install dependencies

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/vondel-frontend.git
cd vondel-frontend
npm install
```

---

## 3. Run frontend locally (optional)

```bash
ionic serve --host 0.0.0.0 --port 8100
```

* Open in browser: `http://localhost:8100`
* Hot-reload is enabled by default — any changes in `src/` will automatically reload the app.

---

## 4. Run frontend inside Docker

> Recommended for full-stack development with backend and database.

1. Make sure `docker-compose.yml` exists in parent repo (vondel root).
2. Start Docker environment:

```bash
docker compose up --build frontend
```

* Frontend runs at: `http://localhost:8100`
* Hot-reload works automatically via volume mount

> Notes:
>
> * `tty: true` and `stdin_open: true` in Docker ensures the container stays alive.
> * `--no-open` prevents Ionic from opening the browser inside Docker.

---

## 5. Development workflow

* Edit files in `src/` (components, pages, services, styles)
* Angular/Ionic dev server automatically updates changes in browser
* Backend API URL can be configured in `environment.ts` or `.env` if using Docker

---

## 6. Environment Variables

If using Docker Compose, environment variables are usually managed in the parent `docker-compose.yml`.
Otherwise, for local development, you can define:

```env
API_URL=http://localhost:3000
```

---

## 7. Docker Commands (frontend only)

* Build frontend image:

```bash
docker compose build frontend
```

* Start frontend container:

```bash
docker compose up frontend
```

* View logs:

```bash
docker compose logs -f frontend
```

* Stop frontend:

```bash
docker compose stop frontend
```

---

## 8. Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Push to your branch
5. Open a pull request

---

## 9. Additional Notes

* Code is structured using Angular modules and Ionic pages.
* Use `ionic generate` commands to create new pages, components, or services.
* Keep `node_modules` inside Docker when using Docker for development to avoid conflicts.
