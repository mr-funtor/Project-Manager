import { FaFileDownload } from "react-icons/fa"
import { ReactElement } from "react"

type GeneralRequestsDetailsProps = {
  component ?: ReactElement,
}

const GeneralRequestsDetails = ({component}:GeneralRequestsDetailsProps) => {
  return(
    <section className="bg-dark-light-background border border-white/10 rounded-lg w-3xl text-white">
      <h2 className="text-white text-2xl font-bold p-5 border-b border-white/10">Request Details</h2>

      <div className="h-96 overflow-auto p-5">
        <div className="bg-dark-background grid grid-cols-2 gap-6 p-5 border-b border-white/10 rounded-md">
          <article className="col-span-2">
            <p>Request ID</p>
            <p className="font-bold">INV-2024-010</p>
          </article>
          <article>
            <p>Status</p>
            <p className="font-bold">Open</p>
          </article>
          <article>
            <p>Date Submitted</p>
            <p className="font-bold">January 20, 2024</p>
          </article>
          <article>
            <p>Customer Name</p>
            <p className="font-bold">Chioma Eze</p>
          </article>
          <article>
            <p>Account Number</p>
            <p className="font-bold">9876543210</p>
          </article>
          <article>
            <p>Investment Type</p>
            <p className="font-bold">Government Bonds</p>
          </article>
          <article>
            <p>Investment Amount</p>
            <p className="font-bold">₦60,000,000.00</p>
          </article>
          <article>
            <p>Tenor</p>
            <p className="font-bold">180 days</p>
          </article>
          <article>
            <p>Interest Rate</p>
            <p className="font-bold">11.8% p.a.</p>
          </article>
          <article>
            <p>Value Date</p>
            <p className="font-bold">January 25, 2024</p>
          </article>
          <article>
            <p>Maturity Date</p>
            <p className="font-bold">July 23, 2024</p>
          </article>
          <article>
            <p>Counterparty</p>
            <p className="font-bold">Central Bank of Nigeria</p>
          </article>
          <article>
            <p>Expected Returns</p>
            <p className="font-bold">₦1,452,055.00</p>
          </article>
          
        </div>

        <div className="col-span-2 mt-5">
          <p>Additional Notes</p>
          <p className="bg-dark-background p-2 mt-2 rounded-md">Customer prefers shorter tenor instruments. All documentation verified and compliant with regulatory requirements.</p>
        </div>

        <div className="col-span-2 mt-5">
          <p>Attached Documents</p>
          <div className="bg-dark-background px-2 py-3 mt-2 rounded-md flex justify-between items-center">
            <p>Tade_Instruction</p>
            <FaFileDownload className="text-keystoneSecondaryBlue"/>
          </div>
        </div>

        {component && component}
      </div>
    </section>
  )
}

export default GeneralRequestsDetails