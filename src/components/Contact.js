import React from 'react'

function Contact() {
  return (
    <>
    {/* <!--Section--> */}
<section className="mb-4 mt-5">

    {/* <!--Section heading--> */}
    <h2 className="h1-responsive font-weight-bold text-center my-4 about-us fw-semibold">İletişime Geç</h2>
    {/* <!--Section description--> */}
    <p className="text-center w-responsive mx-auto mb-5 about-us fw-semibold">Herhangi bir sorunuz var mı? Lütfen doğrudan bizimle iletişime geçmekten çekinmeyin. Ekibimiz size yardımcı olmak için birkaç saat içinde geri dönecektir.</p>


    <div className="row">

        {/* <!--Grid column--> */}
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" >

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name" className="about-us fw-semibold">İsim</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label htmlFor="email" className="about-us fw-semibold">E mail</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label htmlFor="subject" className="about-us fw-semibold">Konu</label>
                        </div>
                    </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label className='about-us fw-semibold' htmlFor="message">Mesaj</label>
                        </div>

                    </div>
                </div>
                {/* <!--Grid row--> */}

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary text-light" >Gönder</a>
            </div>
            <div className="status"></div>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fa fa-map-marker-alt fa-2x"></i>
                    <p className='about-us fw-semibold mb-0'>Abdullahpaşa Mah. Saraybosna Cad. 17</p>
                </li>

                <li className='mt-1'><i className="fa fa-phone mt-2 fa-2x about-us"></i>
                    <p className='about-us fw-semibold'>+90 543 405 2838 </p>
                </li>

                <li><i className="fa fa-envelope mt-2 fa-2x about-us"></i>
                    <p className='about-us fw-semibold'>orcun1919@gmail.com</p>
                </li>
            </ul>
        </div>
        {/* <!--Grid column--> */}

    </div>

</section>
{/* <!--Section--> */}
    </>
  )
}

export default Contact