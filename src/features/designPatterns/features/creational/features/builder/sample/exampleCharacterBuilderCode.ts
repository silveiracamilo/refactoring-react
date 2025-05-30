export const exampleCharacterBuilderCode = 
`import { useMemo } from "react"

type Character = {
  name: string
  race: string
  class: string
  skills: string[]
}

type Builder = {
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
  preservando a imutabilidade do objeto Character
*/
const characterBuilder = (character: Character = createCharacter()): Builder => {
  
  //funções para atualização do objeto Character
  const setName = (name: string) => characterBuilder({ ...character, name });

  const setRace = (race: string) => characterBuilder({ ...character, race });

  const setClass = (charClass: string) => characterBuilder({ ...character, class: charClass });

  const addSkill = (skill: string) => characterBuilder({ 
    ...character, 
    skills: [...character.skills, skill] 
  });

  //retorna o objeto character construído
  const build = () => character;

  return { setName, setRace, setClass, addSkill, build };
}

const ExampleCharacter: React.FC = () => {
  const character = useMemo(() => {
      return characterBuilder()
            .setName('Camilo')
            .setClass('Gold')
            .setRace('Speeding')
            .addSkill('force')
            .addSkill('agility')
            .addSkill('resilience')
            .build();
  }, []);
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

export default ExampleCharacter;`;

export const exampleCharacterBuilderRenderCode = 
`<div className='border-1 border-blue-500 p-2 w-60'>
  <ExampleCharacter />
</div>`;