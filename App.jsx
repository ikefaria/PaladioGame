export default function PaladioGameUI() {
  return (
    <div className=\"p-4 space-y-6\">
      <div className=\"border rounded-2xl shadow p-4\">
        <h2 className=\"text-xl font-bold mb-2\">Facilitador</h2>
        <div className=\"grid grid-cols-2 gap-4\">
          <div>
            <label className=\"font-semibold\">Rodada Atual:</label>
            <select className=\"w-full border rounded p-2\">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
          <div>
            <label className=\"font-semibold\">Permitir Comunicação?</label>
            <select className=\"w-full border rounded p-2\">
              <option>Não</option>
              <option>Sim</option>
            </select>
          </div>
        </div>
        <div className=\"mt-4\">
          <button className=\"bg-blue-600 text-white px-4 py-2 rounded\">Avançar Rodada</button>
        </div>
      </div>
      <div className=\"border rounded-2xl shadow p-4\">
        <h2 className=\"text-xl font-bold mb-2\">Grupo: Mining Co. / Ore LLC</h2>
        <div className=\"mb-4\">
          <label className=\"block font-semibold\">Escolha seu preço por grama:</label>
          <div className=\"flex space-x-4 mt-2\">
            <button className=\"bg-gray-100 hover:bg-blue-200 px-4 py-2 rounded\">$10</button>
            <button className=\"bg-gray-100 hover:bg-blue-200 px-4 py-2 rounded\">$20</button>
            <button className=\"bg-gray-100 hover:bg-blue-200 px-4 py-2 rounded\">$30</button>
          </div>
        </div>
        <div className=\"mt-4\">
          <label className=\"font-semibold\">Lucro obtido nesta rodada:</label>
          <div className=\"text-lg mt-1\">---</div>
        </div>
      </div>
      <div className=\"border rounded-2xl shadow p-4\">
        <h2 className=\"text-xl font-bold mb-2\">Histórico de Rodadas</h2>
        <table className=\"w-full text-sm border\">
          <thead>
            <tr className=\"bg-gray-200\">
              <th className=\"p-2 border\">Rodada</th>
              <th className=\"p-2 border\">Preço Escolhido</th>
              <th className=\"p-2 border\">Lucro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=\"p-2 border\">1</td>
              <td className=\"p-2 border\">$20</td>
              <td className=\"p-2 border\">90M</td>
            </tr>
            <tr>
              <td className=\"p-2 border\">2</td>
              <td className=\"p-2 border\">$30</td>
              <td className=\"p-2 border\">150M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
