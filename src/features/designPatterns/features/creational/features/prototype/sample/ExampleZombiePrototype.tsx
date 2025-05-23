type Zombie = {
  type: string;
  health: number;
  damage: number;
  scream: () => string;
}

// Protótipo base e imutavél
const zombiePrototype: Zombie = Object.freeze({
  type: 'Walker',
  health: 100,
  damage: 10,
  scream: () => 'Braaaains...',
});

// Função para criar zumbis a partir do protótipo
const createZombie = (overrides: Partial<Zombie> = {}): Zombie => ({
  ...zombiePrototype,
  ...overrides,
});

// Dados dos zumbis
const zombies: Zombie[] = [
  createZombie(),
  createZombie({
    health: 20,
    damage: 20,
  }),
  createZombie({
    type: 'Runner',
    damage: 15,
    scream: () => 'Aaaaargh!',
  }),
  createZombie({
    type: 'Tank',
    health: 200,
    damage: 25,
    scream: () => 'Grrrrrrr!',
  })
];

// Componente que exibe a lista de zumbis
const ExampleZombiePrototype: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🧟‍♂️ Lista de Zumbis</h1>
      {zombies.map((zombie, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '8px'
          }}
        >
          <h2>{zombie.type}</h2>
          <p>❤️ Saúde: {zombie.health}</p>
          <p>💥 Dano: {zombie.damage}</p>
          <p>🗣️ Grito: {zombie.scream()}</p>
        </div>
      ))}
    </div>
  );
};

export default ExampleZombiePrototype;