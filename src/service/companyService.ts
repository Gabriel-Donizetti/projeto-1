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
  async create(companyDto: CompanyDto) {
    const company = await this.companyRepository.findCompanyByCnpj(companyDto)
    if(company){
        throw new Error('This company already exists. Try another.')
    }

    await this.companyRepository.create(companyDto)
  }

  /**'
   * @param companyRepository
   * @returns
   */
  async findBy(companyDto: CompanyDto) {
    if(companyDto.segment){
      const segments = await this.companyRepository.findBySegment(companyDto)
      if(!segments){
        throw new Error('This segment does not exists.')
      }else{
        return segments;
      }
    }
    if(companyDto.city){
      const city = await this.companyRepository.findByCity(companyDto)
      if(!city){
        throw new Error('This city does not exists.')
      }else{
        return city;
      }
    }
    
  }

  
}

 
