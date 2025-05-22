interface Character {
  name: string
  race: string
  class: string
  skills: string[]
}

interface Builder {
  setName: (name: string) => Builder
  setRace: (race: string) => Builder
  setClass: (charClass: string) => Builder
  addSkill: (skill: string) => Builder
  build: () => Character
}

// Factory para fabricar Estado inicial vazio
const createCharacter = (): Character => ({
  name: '',
  race: '',
  class: '',
  skills: [],
})

/* 
  cria closure que retorna referencia ao objeto Builder, 
  criando uma cadeia de métodos até finalizar no método build, 
  preservando a imutabilidade externa do objeto Character
*/
const characterBuilder = (): Builder => {
  let character = createCharacter();

  //função responsável por atualizar character
  const characterUpdate = (key: string, value: string | string[]) => {
    character = { ...character, [key]: value };
  }

  const setName = (name: string): Builder => {
    characterUpdate('name', name);
    return builder;
  }

  const setRace = (race: string): Builder => {
    characterUpdate('race', race);
    return builder;
  }

  const setClass = (charClass: string): Builder => {
    characterUpdate('class', charClass);
    return builder;
  }

  const addSkill = (skill: string): Builder => {
    characterUpdate('skills', [...character.skills, skill]);
    return builder;
  }

  //retorna o objeto character construido
  const build = () => character;

  const builder = { setName, setRace, setClass, addSkill, build };

  return builder;
}

const ExampleCharacter: React.FC = () => {
  const character = characterBuilder()
                    .setName('Camilo')
                    .setClass('Gold')
                    .setRace('Speeding')
                    .addSkill('force')
                    .addSkill('agility')
                    .addSkill('resilience')
                    .build();
  const { name, race, class: charClass, skills } = character;

  return (
    <div>
      <h2>{name} - {race} / {charClass}</h2>
      <h4>Skills:</h4>
      <ol className="list-disc ml-4">
        {skills.map((skill, i) => <li key={"skill-"+i}>{skill}</li>)}
      </ol>
    </div>
  )
}

export default ExampleCharacter;