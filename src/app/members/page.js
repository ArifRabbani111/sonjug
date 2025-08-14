const members = [
    { name: "Rakibul Kabir", year: "2020", profession: "Data Scientist" },
    { name: "Siam Arefin", year: "2021", profession: "Machine Learning Engineer" },
    { name: "Imroj Hasan", year: "2019", profession: "QA Engineer" },
  ];
  
  export default function Members() {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Members</h2>
        <input className="w-full p-2 border rounded mb-6" placeholder="Search members..." />
        <div className="grid md:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <div key={i} className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-bold">{m.name}</h3>
              <p>Year: {m.year}</p>
              <p>{m.profession}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  