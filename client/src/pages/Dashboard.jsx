export default function Dashboard() {
  return (
    <section className="section bg-white">
      <div className="container-narrow container text-center py-5">
        <span className="eyebrow mb-2 d-inline-flex justify-content-center">
          Coming in a future phase
        </span>
        <h1 style={{ fontSize: "2rem" }}>Management dashboard</h1>
        <p className="mx-auto" style={{ color: "var(--slate)", maxWidth: "500px" }}>
          Client management, guard scheduling and incident reporting will be
          available here once authentication and the backend API are in
          place.
        </p>
      </div>
    </section>
  );
}