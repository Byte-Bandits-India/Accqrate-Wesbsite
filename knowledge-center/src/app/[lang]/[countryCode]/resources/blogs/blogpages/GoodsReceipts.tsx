/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/components/T";
import BlogLayout from "../layout/BlogLayout";

export default function GoodsReceipts() {
  return (
    <BlogLayout
      pageTitle="Goods Receipts Accounting"
      updatedOn="Feb 08th, 2024"
      minRead="23"
    >
      <img
        src="/images/blogs/goods-receipts-accounting.webp"
        className="w-full mb-3 rounded-md"
        alt="Goods Receipts Accounting"
      />

      <h3 className="text-fluid-small font-semibold mb-2">
        <T>The more inventory a company has, the less likely they will have what they need</T>
      </h3>

      <p className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          Stock refers to the value of all available finished goods directly sold to customers. It helps
          determine business revenue and is an essential asset for any organisation. Stocks are either
          manufactured in-house or procured from suppliers.
        </T>
      </p>

      <p className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          A typical procurement process starts with a purchase request, which is an internal document
          providing the requirements for materials to the buyer in the purchasing department. Purchase
          requests can be placed by different departments in an organisation. The buyer then converts the
          purchase request to a purchase order based on past supplies or new bids.
        </T>
      </p>

      <p className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          The supplier then delivers the goods to the buyer. The goods receipt is the document that records
          the incoming goods and stores the materials in the inventory. Some companies also conduct
          inspections (quality control of goods) before accepting the stock into their inventory.
        </T>
      </p>

      <div className="story text-fluid-small leading-relaxed text-gray-800">
        <T>The Goods Receipt performs the following tasks:</T>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <T>Increases the inventory for the materials in the specified warehouse or location.</T>
          </li>
          <li>
            <T>Posts the accounting entries to the ledger.</T>
          </li>
        </ul>
      </div>

      <table className="w-[90%] my-4  text-fluid-body">
        <thead className="">
          <tr>
            <th></th>
            <th><T>DR</T></th>
            <th><T>CR</T></th>
          </tr>
        </thead>
        <tbody >
          <tr >
            <td><T>Inventory Account (material account)</T></td>
            <td><T>X</T></td>
            <td></td>
          </tr>
          <tr>
            <td><T>Purchase account (“GR/IR account”)</T></td>
            <td></td>
            <td><T>X</T></td>
          </tr>
        </tbody>
      </table>

      <p className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          Few systems have a clear split of local and foreign purchasing accounts. For example, when the
          procurement is done from a local supplier, the goods receipt accounting entries will be as follows:
        </T>
      </p>

      <table className="w-[90%] my-4  text-fluid-body">
        <thead >
          <tr>
            <th></th>
            <th><T>DR</T></th>
            <th><T>CR</T></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><T>Inventory Account (material account)</T></td>
            <td><T>X</T></td>
            <td></td>
          </tr>
          <tr>
            <td><T>Local Purchase Account</T></td>
            <td></td>
            <td><T>X</T></td>
          </tr>
        </tbody>
      </table>

      <p className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          When the procurement is done from a foreign supplier, also known as import supplies, the goods
          receipt accounting entries will be as follows:
        </T>
      </p>

      <table className="w-[90%] my-4  text-fluid-body">
        <thead>
          <tr>
            <th></th>
            <th><T>DR</T></th>
            <th><T>CR</T></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><T>Inventory Account (material account)</T></td>
            <td><T>X</T></td>
            <td></td>
          </tr>
          <tr>
            <td><T>Foreign Purchase Account</T></td>
            <td></td>
            <td><T>X</T></td>
          </tr>
        </tbody>
      </table>

      <p className="story text-fluid-small leading-relaxed text-gray-800">
        <T>
          The purchase account is a parking account in the procurement process from a foreign supplier. In the
          subsequent process, when invoices are generated for the purchase orders/goods receipts, it gets
          cleared and posted to Accounts Payable (the supplier account).
        </T>
      </p>
    </BlogLayout>
  );
}
