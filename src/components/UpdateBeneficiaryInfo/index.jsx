export default function UpdateBeneficiaryInfo(){
    return(<div className="update-info form-card">
                    <form
                      action="#"
                      className="update-beneficiary-info d-flex flex-column gap-4"
                    >
                      <fieldset
                        className="d-flex flex-column gap-1"
                        name="person-info"
                      >
                        <legend className="fw-bold">Alterar Dados Cadastrais</legend>
                        <label htmlFor="name" className="form-label">
                          Nome:
                        </label>
                        <input
                          type="text"
                          placeholder="Nome completo"
                          id="name"
                          className="form-control"
                        />

                        <label htmlFor="id-number">RG ou CPF:</label>
                        <input
                          id="id-number"
                          type="text"
                          pattern="\d{7,9}|\d{11}"
                          placeholder="RG ou CPF"
                          className="form-control"
                        />
                        <input
                          type="text"
                          placeholder="REG-123"
                          readOnly
                          className="form-control"
                        />
                      </fieldset>
                      <button className="form-btn" type="submit">
                        Confirmar Alterações
                      </button>
                    </form>
                  </div>)
}