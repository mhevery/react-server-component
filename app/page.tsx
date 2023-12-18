import { InteractionTest } from "./test";
import { usePeople } from "./person";
import { TableStatic } from "./table-static";
import { TableDynamic } from "./table-dynamic";
import { end, start } from "./measure";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const people = usePeople({ size: Number(searchParams?.size || "100") });
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `(${start})()` }} />
      <div>
        <p>
          This is a test of how long it takes RSC to process first interaction.
          The test tries to click on the two buttons as eagerly as possible and
          measures the amount of time before the click handler runs and UI gets
          updated. The second button is identical test, but shows difference
          between cold start (paused) vs warm start (resumed). The difference
          between the first and second test is the cost of resuming the state
          and parsing the Qwik source for the first time.
        </p>
        <p>Try these combinations:</p>
        <table cellPadding={10}>
          <tbody>
            <tr>
              <th></th>
              <th>SMALL</th>
              <th>LARGE</th>
            </tr>
            <tr>
              <th>STATIC</th>
              <td>
                <a href="?dynamic=false&size=100">static-small</a>
              </td>
              <td>
                <a href="?dynamic=false&size=10000">static-large</a>
              </td>
            </tr>
            <tr>
              <th>DYNAMIC</th>
              <td>
                <a href="?dynamic=true&size=100">dynamic-small</a>
              </td>
              <td>
                <a href="?dynamic=true&size=10000">dynamic-small</a>
              </td>
            </tr>
          </tbody>
        </table>
        <h1>Table</h1>
        {searchParams?.dynamic == "true" ? (
          <TableDynamic people={people} />
        ) : (
          <TableStatic people={people} />
        )}
        <h1>Test Footer</h1>
        <InteractionTest id="1" />
        <InteractionTest id="2" />
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(${end})()` }} />
      <pre id="consoleLog" />
    </>
  );
}
