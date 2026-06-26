import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <section className="bg-ink text-fog section-sm">
        <div className="container-narrow container">
          <span className="eyebrow mb-2 d-inline-flex">Contact</span>
          <h1 className="text-white" style={{ fontSize: "2.4rem" }}>
            Reach the control room
          </h1>
          <p style={{ color: "var(--slate-soft)", maxWidth: "560px" }}>
            For active incidents, call the dispatch line directly. For
            everything else, send us a message and we'll respond within one
            business day.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-narrow container">
          <div className="row g-5">
            <div className="col-lg-5">
              <ul className="list-unstyled d-flex flex-column gap-4">
                <li className="d-flex gap-3">
                  <i className="bi bi-telephone-fill text-beacon fs-5" />
                  <div>
                    <div className="form-label mb-1">Dispatch line</div>
                    <div style={{ fontFamily: "var(--font-mono)" }}>+254 700 000 000</div>
                  </div>
                </li>
                <li className="d-flex gap-3">
                  <i className="bi bi-envelope-fill text-beacon fs-5" />
                  <div>
                    <div className="form-label mb-1">Email</div>
                    <div style={{ fontFamily: "var(--font-mono)" }}>ops@sanjaygroupsecurity.com</div>
                  </div>
                </li>
                <li className="d-flex gap-3">
                  <i className="bi bi-geo-alt-fill text-beacon fs-5" />
                  <div>
                    <div className="form-label mb-1">Office</div>
                    <div>Nairobi, Kenya</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-7">
              <div className="viewfinder">
                <span className="vf-tr" aria-hidden="true" />
                <span className="vf-br" aria-hidden="true" />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}