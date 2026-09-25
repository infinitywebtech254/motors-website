import React,{useState}from'react';
import{createRoot}from'react-dom/client';
import{
  Menu,
  X,
  ArrowUpRight,
  Gauge,
  Fuel,
  Settings2,
  Ship,
  RefreshCw,
  CreditCard,
  Car,
  MapPin,
  Phone
}from'lucide-react';
import'./style.css';

const cars=[
  ['Mercedes-Benz C200','2021','KSh 6,850,000','38,000 km','Petrol','Automatic','https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85'],
  ['Range Rover Velar','2020','KSh 9,600,000','51,000 km','Diesel','Automatic','https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85'],
  ['BMW 5 Series','2021','KSh 7,450,000','42,000 km','Petrol','Automatic','https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85'],
  ['Toyota Land Cruiser','2022','KSh 15,900,000','29,000 km','Diesel','Automatic','https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1200&q=85']
];

function App(){
  const[open,setOpen]=useState(false);

  return(
    <>
      <section className="hero">
        <header>
          <a className="brand" href="#">
            <b>VELOCITY</b>
            <small>MOTORS KENYA</small>
          </a>

          <nav className={open?'open':''}>
            <a href="#stock">Inventory</a>
            <a href="#import">Import</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="headCta" href="#contact">
            FIND YOUR CAR <ArrowUpRight size={15}/>
          </a>

          <button
            className="menu"
            onClick={()=>setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open?<X/>:<Menu/>}
          </button>
        </header>

        <div className="shade"/>

        <main>
          <small>NAIROBI • KENYA</small>

          <h1>
            DRIVE<br/>
            <em>SOMETHING</em><br/>
            DIFFERENT.
          </h1>

          <p>
            Curated vehicles. Transparent sourcing. A better way to find your next car.
          </p>

          <div className="buttons">
            <a href="#stock">EXPLORE CARS →</a>
            <a className="ghost" href="#import">IMPORT A CAR</a>
          </div>
        </main>
      </section>

      <div className="ticker">
        <span className="ticker-mobile">
          LOCAL STOCK <i>•</i> DIRECT IMPORTS
        </span>

        <span className="ticker-desktop">
          LOCAL STOCK <i>•</i> DIRECT IMPORTS <i>•</i> TRADE-INS <i>•</i> FINANCING SUPPORT <i>•</i> QUALITY CHECKED
        </span>
      </div>

      <section className="stock" id="stock">
        <div className="sectionHead">
          <div>
            <small>01 / CURRENT STOCK</small>

            <h2>
              Cars worth<br/>
              turning around for.
            </h2>
          </div>

          <p>
            Browse our featured vehicles with the details that matter presented clearly from the start.
          </p>
        </div>

        <div className="cars">
          {cars.map((c)=>
            <article key={c[0]}>
              <div className="photo">
                <img src={c[6]} alt={c[0]}/>

                <span>{c[1]}</span>

                <button>
                  VIEW VEHICLE <ArrowUpRight size={13}/>
                </button>
              </div>

              <div className="carTitle">
                <h3>{c[0]}</h3>
                <strong>{c[2]}</strong>
              </div>

              <div className="specs">
                <span><Gauge/>{c[3]}</span>
                <span><Fuel/>{c[4]}</span>
                <span><Settings2/>{c[5]}</span>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="import" id="import">
        <div className="importPic"/>

        <div className="importCopy">
          <small>02 / IMPORT TO ORDER</small>

          <h2>
            Can't find it?<br/>
            <em>We'll source it.</em>
          </h2>

          <p>
            Tell us the model, year, specification and budget you're looking for. Start a tailored vehicle sourcing conversation with our team.
          </p>

          {[
            'Tell us what you want',
            'Review sourcing options',
            'Confirm your vehicle',
            'Import & collection'
          ].map((x,i)=>
            <div className="step" key={x}>
              <b>0{i+1}</b>
              {x}
            </div>
          )}

          <a href="#contact">
            START AN IMPORT REQUEST →
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <small>03 / MORE THAN A SHOWROOM</small>

        <h2>
          ONE STOP.<br/>
          MORE POSSIBILITIES.
        </h2>

        <div className="serviceGrid">
          <article>
            <Car/>
            <b>BUY A CAR</b>
            <p>Explore available stock with specifications and pricing.</p>
          </article>

          <article>
            <Ship/>
            <b>IMPORT</b>
            <p>Request a specific model and begin a tailored sourcing enquiry.</p>
          </article>

          <article>
            <RefreshCw/>
            <b>TRADE-IN</b>
            <p>Submit your current vehicle for a trade-in discussion.</p>
          </article>

          <article>
            <CreditCard/>
            <b>FINANCING</b>
            <p>Enquire about financing pathways and requirements.</p>
          </article>
        </div>
      </section>

      <section className="statement">
        <div>YOUR NEXT CAR</div>
        <div>SHOULDN'T FEEL</div>
        <div className="outline">ORDINARY.</div>
      </section>

      <section className="contact" id="contact">
        <div>
          <small>LET'S FIND YOUR NEXT CAR</small>

          <h2>
            READY WHEN<br/>
            YOU ARE.
          </h2>

          <p>
            Send an enquiry for available stock, imports, trade-ins or financing.
          </p>

          <span>
            <Phone/> +254 724 582 733
          </span>

          <span>
            <MapPin/> Nairobi, Kenya
          </span>
        </div>

        <form onSubmit={e=>e.preventDefault()}>
          <input placeholder="Your name"/>
          <input placeholder="Phone number"/>

          <select defaultValue="">
            <option value="" disabled>
              I'm interested in...
            </option>
            <option>Available stock</option>
            <option>Vehicle import</option>
            <option>Trade-in</option>
            <option>Financing</option>
          </select>

          <input placeholder="Vehicle / model"/>

          <textarea
            rows="4"
            placeholder="Tell us what you're looking for..."
          />

          <button>
            SEND ENQUIRY <ArrowUpRight/>
          </button>
        </form>
      </section>

      <footer className="siteFooter">
        <div className="footerTop">

          <div className="footerBrand">
            <b>VELOCITY</b>
            <small>MOTORS KENYA</small>

            <p>
              Curated vehicles. Transparent sourcing.
              <br/>
              A better way to find your next car.
            </p>

            <a className="footerCta" href="#stock">
              FIND YOUR NEXT CAR <ArrowUpRight size={15}/>
            </a>
          </div>

          <div className="footerColumn">
            <h4>EXPLORE</h4>
            <a href="#stock">Inventory</a>
            <a href="#import">Import a Car</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footerColumn">
            <h4>SERVICES</h4>
            <a href="#stock">Buy a Car</a>
            <a href="#import">Direct Imports</a>
            <a href="#services">Trade-In</a>
            <a href="#services">Financing</a>
          </div>

          <div className="footerColumn">
            <h4>CONTACT</h4>

            <span>
              <Phone size={14}/>
              +254 724 582 733
            </span>

            <span>
              <MapPin size={14}/>
              Nairobi, Kenya
            </span>

            <h4 className="socialTitle">FOLLOW US</h4>

            <div className="footerSocials">

              <span aria-label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>

              <span aria-label="Facebook">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z"/>
                </svg>
              </span>

              <span aria-label="WhatsApp">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 8.7 3.9 8.38 8.38 0 0 1 12.5 3h.5a8.48 8.48 0 0 1 8 8z"/>
                  <path d="M9 8.5c.5 2.5 2 4 4.5 5"/>
                  <path d="M13.5 13.5l1.5-1"/>
                  <path d="M9 8.5L8 10"/>
                </svg>
              </span>

            </div>
          </div>

        </div>

        <div className="footerStrip">
          <span>LOCAL STOCK</span>
          <i>•</i>
          <span>DIRECT IMPORTS</span>
          <i>•</i>
          <span>TRADE-INS</span>
          <i>•</i>
          <span>FINANCING</span>
        </div>

        <div className="footerBottom">
          <span>
            © 2026 VELOCITY MOTORS KENYA. ALL RIGHTS RESERVED.
          </span>

          <span>
            NAIROBI, KENYA
          </span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App/>);