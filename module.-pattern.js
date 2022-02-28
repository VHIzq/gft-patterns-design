
const Service = () => {

  const url = "";
  
  return{
    getUser: async (url => {
      return await fetch(new URL(url));
    })
  }
};




const Team = () => {

  const members = [];

  function addMember(name){
    members.push(name);
  }

  function deleteMember(name) {
    members =members.filter(member => member !== name);
  }

  function showTeam(){
    return members;
  }
  return{
    add: addMember,
    delete: deleteMember,
    show: showTeam,
  };

}

const dreamTeam = Team();
dreamTeam.add("Gera");
dreamTeam.add("Dani");
dreamTeam.add("Fri");
dreamTeam.add("Kari");

console.log(dreamTeam.show());
