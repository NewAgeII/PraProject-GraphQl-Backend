import { CustomerResolver } from './Customer/index'
import { UserResolver } from './User';
import { ProjectResolver } from './Project';
import {ProductResolver} from './Product';
import { merge } from 'lodash';


export default merge(CustomerResolver, UserResolver, ProjectResolver, ProductResolver)
