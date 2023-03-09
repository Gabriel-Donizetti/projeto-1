import companyRepository from '@repository/companyRepository';
import { CompanyDto } from 'src/interface/company';

export default class CompanyService {

  
  companyRepository: companyRepository;
  constructor() {
    this.companyRepository = new companyRepository();
  }
  /**'
   * @param companyRepository
   * @returns
   */
  async create(comapanyDto: CompanyDto) {
    const company = await this.companyRepository.findCompanyByCnpj(comapanyDto)
    if(company){
        throw new Error('This company already exists. Try another.')
    }

    await this.companyRepository.create(comapanyDto)
  }

 

 

  
}
