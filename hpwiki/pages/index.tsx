import SearchBody from "../components/SearchBody";
import Topbar from "../components/topbar";

export default function Home() {
  return (
      <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900
       to-slate-900bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900
       to-slate-900"
      >
      {/*    header function with */}
          <Topbar/>
      {/*    middle page with the search function */}
          <SearchBody/>
      </div>
  )
}
