export const exampleReportFacadeCode = 
`import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useCallback } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

//retorna mock de usuários
const getUsers = (): Promise<User[]> => Promise.resolve([
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 1, name: 'Mary', email: 'mary@gmail.com' },
]);

const useGetUsers = () => {
    return useQuery({ 
        queryKey: ['users'], 
        queryFn: async () => {
            const apiResponse = await getUsers();
            return apiResponse;
        }
    });
};

// criando Facade para simplificar a utilização do componente 
// e centralizar lógica de geração de relatório
const UserReportFacade = {
  generatePdf: (users: User[]) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("User Report", 14, 22);
    doc.setFontSize(11);
    doc.text(\`Generated on: \${new Date().toLocaleString()}\`, 14, 30);

    autoTable(doc, {
      startY: 40,
      head: [["ID", "Name", "Email"]],
      body: users.map((u) => [u.id, u.name, u.email]),
      theme: "grid",
    });

    doc.save("user-report.pdf");
  },
};

const ExampleReportFacade = () => {
    const { data: users, isLoading } = useGetUsers();

    const doExportUsers = useCallback(() => {
        //verificando se users é válido chamando Facade para gerar relatório
        users && UserReportFacade.generatePdf(users);
    }, [users]);

    if (isLoading || !users) {
        return <p>loading...</p>
    }

    return (
        <Button onClick={doExportUsers}>Exportar relatório de usuários</Button>
    );
};

export default ExampleReportFacade;`;

export const exampleReportFacadeRenderCode = 
`<div className='border-1 border-blue-500 p-1 w-60'>
    <ExampleReportFacade />
</div>`;