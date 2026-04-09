export default function AddBeneficiaryForm(){
    return(
        <div className="add form-card">
                    <form
                      action="#"
                      className="form-add-beneficiary d-flex flex-column gap-4"
                    >
                      <fieldset className="d-flex flex-column gap-1" name="person-info">
                        <legend>Dados pessoais</legend>
                        <label htmlFor="name" className="form-label">
                          Nome:
                        </label>
                        <input
                          type="text"
                          placeholder="Digite seu nome completo"
                          id="name"
                          className="form-control"
                        />
        
                        <label htmlFor="id-number">RG ou CPF:</label>
                        <input
                          id="id-number"
                          type="text"
                          pattern="\d{7,9}|\d{11}"
                          placeholder="Digite seu RG ou CPF sem pontos ou hífen(-)"
                          className="form-control"
                        />
                        <input
                          type="text"
                          placeholder="Número de Registro REG-123"
                          readOnly
                          className="form-control"
                        />
                      </fieldset>
                      <button className="form-btn" type="submit">
                        Confirmar Cadastro
                      </button>
                    </form>
                  </div>
    )
}