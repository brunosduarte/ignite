import { api } from "../../services/api";
import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionTable() {
    useEffect(() => {
        api.get('transactions')
        .then(data => console.log(data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento website</td>
                        <td className="deposit">R12.000</td>
                        <td>Dev</td>
                        <td>20/02/12</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento website</td>
                        <td className="deposit">R1.000</td>
                        <td>Dev</td>
                        <td>20/02/12</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento website</td>
                        <td className="withdraw">R12.000</td>
                        <td>Dev</td>
                        <td>20/02/12</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
}