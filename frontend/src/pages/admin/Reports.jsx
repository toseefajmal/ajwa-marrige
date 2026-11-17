
import {
  TrendingUp,
  CalendarDays,
  Wallet,
  Users,
  Download,
  ArrowUpRight,
} from "lucide-react";

const Reports = () => {
  const monthlyData = [
    { month: "Jan", revenue: 40, bookings: 30 },
    { month: "Feb", revenue: 55, bookings: 45 },
    { month: "Mar", revenue: 45, bookings: 40 },
    { month: "Apr", revenue: 70, bookings: 60 },
    { month: "May", revenue: 60, bookings: 50 },
    { month: "Jun", revenue: 85, bookings: 75 },
    { month: "Jul", revenue: 65, bookings: 55 },
    { month: "Aug", revenue: 90, bookings: 80 },
    { month: "Sep", revenue: 75, bookings: 65 },
    { month: "Oct", revenue: 100, bookings: 90 },
    { month: "Nov", revenue: 80, bookings: 70 },
    { month: "Dec", revenue: 95, bookings: 85 },
  ];

  const stats = [
    { title: "Annual Revenue", value: "Rs. 8.5M", icon: Wallet, change: "+15.3%" },
    { title: "Total Bookings", value: "248", icon: CalendarDays, change: "+12.5%" },
    { title: "Total Customers", value: "186", icon: Users, change: "+8.2%" },
  ];

  return (
    <div className="space-y-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#211b13]">Reports & Analytics</h1>
          <p className="text-sm text-gray-500 mt-2">Monitor business performance and revenue.</p>
        </div>

        <button onClick={() => window.print()} className="flex items-center justify-center gap-2 bg-[#17140f] text-white px-5 py-3 rounded-lg hover:bg-[#b99753] transition">
          <Download size={17} /> Print Report
        </button>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-white border border-[#eee7da] rounded-xl p-6">
              <div className="flex justify-between">
                <span className="w-12 h-12 rounded-xl bg-[#f5f0e5] text-[#a27d3b] flex items-center justify-center"><Icon size={23} /></span>
                <span className="text-green-600 text-xs font-semibold flex items-center gap-1"><TrendingUp size={14} />{item.change}</span>
              </div>
              <p className="text-sm text-gray-500 mt-5">{item.title}</p>
              <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-[#eee7da] rounded-xl p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <div>
            <h2 className="font-bold text-lg">Annual Performance</h2>
            <p className="text-sm text-gray-500 mt-1">Monthly revenue and booking comparison</p>
          </div>
          <span className="text-sm bg-[#f5f0e5] text-[#a27d3b] px-4 py-2 rounded-lg h-fit">Year: 2026</span>
        </div>

        <div className="flex items-center gap-5 mt-7 text-xs text-gray-500">
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#b99753]" />Revenue</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#d8d0c0]" />Bookings</span>
        </div>

        <div className="h-64 flex items-end justify-between gap-2 mt-8 border-b border-l border-[#eee7da] px-2">
          {monthlyData.map((item) => (
            <div key={item.month} className="flex-1 h-full flex items-end justify-center gap-1">
              <div title={`${item.month} revenue ${item.revenue}`} className="w-1/2 max-w-6 bg-[#b99753] rounded-t" style={{ height: `${item.revenue}%` }} />
              <div title={`${item.month} bookings ${item.bookings}`} className="w-1/2 max-w-6 bg-[#d8d0c0] rounded-t" style={{ height: `${item.bookings}%` }} />
              <span className="absolute" />
            </div>
          ))}
        </div>
        <div className="flex justify-between px-1 mt-3 text-[10px] sm:text-xs text-gray-400">
          {monthlyData.map(item => <span key={item.month}>{item.month}</span>)}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <h2 className="font-bold text-lg">Event Type Report</h2>
          <p className="text-sm text-gray-500 mt-1">Booking distribution by event</p>

          <div className="space-y-6 mt-8">
            {[
              ["Wedding", 45, "bg-[#b99753]"],
              ["Mehndi", 25, "bg-[#c9a96e]"],
              ["Reception", 20, "bg-[#d9c8a7]"],
              ["Other Events", 10, "bg-[#e9e2d5]"],
            ].map((item) => (
              <div key={item[0]}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">{item[0]}</span>
                  <span className="font-semibold">{item[1]}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${item[2]}`} style={{ width: `${item[1]}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#eee7da] rounded-xl p-6">
          <h2 className="font-bold text-lg">Business Summary</h2>
          <p className="text-sm text-gray-500 mt-1">Key performance information</p>

          <div className="space-y-5 mt-8">
            {[
              ["Confirmed Bookings", "161"],
              ["Pending Bookings", "50"],
              ["Cancelled Bookings", "37"],
              ["Available Halls", "03"],
              ["Average Booking Value", "Rs. 34,275"],
            ].map((item) => (
              <div key={item[0]} className="flex justify-between border-b border-[#eee7da] pb-4">
                <span className="text-sm text-gray-500">{item[0]}</span>
                <span className="font-semibold text-sm">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
