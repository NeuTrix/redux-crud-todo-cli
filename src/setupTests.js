import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// ======== esllint
/*global *.* describe:true*/
/*global *.* it:true*/
/*eslint no-undef: "error"*/

// ======== eslint
/*global describe:true*/
/*global it:true*/
/*global xit:true*/
/*global expect:true*/
/*global render:true*/
/*global mount:true*/
/*global beforeEach:true*/
/*eslint no-undef: "error"*/

configure({ adapter: new Adapter() });