import { LineChart, Line, YAxis, XAxis, Tooltip, Legend } from 'recharts';

export default function Dashboard() {
  const data = [
    {name:'Sweater', value: 200},
    {name:'Jacket', value: 200},
    {name:'Gloves', value: 10},
    {name:'Winter Coat', value: 100},
    {name:'Scarf', value: 400},
    {name:'Beanie', value: 200},
    {name:'Snow Boots', value: 0},
  ];
  return <div>
    <div>
    <div className="stats shadow grid grid-cols-2 md:grid-cols-4">
  
  <div className="stat md:h-40 md:w-48">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Donates</div>
    <div className="stat-value text-primary">25.6K$</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat md:h-40 md:w-48">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Site Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">14% more than last month</div>
  </div>
  
  <div className="stat md:h-40 md:w-48">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value">40,520 </div>
    <div className="stat-title">Donates Take</div>
    <div className="stat-desc text-secondary">1200 clothes remaining</div>
  </div>

  <div className="stat place-items-center md:h-40 md:w-48">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </div>

      <div className='mt-10'>
        <h1 className='text-center text-3xl font-semibold mb-5'>Dashboard Line Chart</h1>
      <LineChart width={1200} height={300} data={data}>
        <YAxis dataKey="value"/>
        <YAxis/>
        <XAxis dataKey="name"/>
        <XAxis/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
      </div>
  </div>;
}
