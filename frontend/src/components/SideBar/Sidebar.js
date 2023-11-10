import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';
import image from './logo2.png';
import { useAuthContext } from '../../hooks/useAuthContext';

function SideBar() {
  const iconStyle = { filter: 'invert(1)' };
  const user = useAuthContext();
  return (
    <div>
      <div class="sidebar">
        <div class="logo-wrapper">
          <Link to="/" class="nav-link">
            <img src={image} alt="logo" class="logo" />
          </Link>
        </div>
        <ul class="sidebar-menu">
          <li>
            <Link to="/librarianDashboard" class="nav-link">
              <span class="icon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANZJREFUSEvtV8ENgzAQM5u0m8AmZbKyCd2EblJkRKsQaHxFJyWVchKv+DC+XJyjQaZoMvGiKOILAD6peESLKifGHyp+Gco/AOhX3B3ATeQ8AVxDTFzqFsBoIKaCbsURzzwVxH+UV+Ja6m8N81fNxePEY7WER1fTPNgbKdNhhTYm4kGszu/hejHELNdkkBBapuUISsskpzJ8YsL9crFMg9gdxI04m+Jfr0UXxZZGee9xvRZVY9ZBYFOhM87FQY8Dn4rk7XTGuSw5pvFWfbnLelF/Ei6K1EtmBBlUHyr3vLcAAAAASUVORK5CYII=" style={iconStyle} />
              </span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/memberManagement" class="nav-link">
              <span class="icon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZlJREFUSEvFlo1NQzEMhN1NYBJgEzoJMAkwCTBJ2QT0Vc9RnrFjJ4BqqarUxjnf+Sc+yIXscCFcWQG+EpFbEeH7cwuc7/cZElVgQO5F5GFwuYI/dQGFxyvAjwmgvZwAXkUEvyVgWD5vss6oqGcJ4C5iHzEG9LSCZnxC8Aj47RdMPemv7Y8eMPJSSJnBhg8VntmLiBz7Qxa4IjFtQ+7UqhUPcGs5C5yxheEP2baezgpxx9oCU1AwiIyoucCzrO12QffA5IqiGhkSRxOKuoB1yb8HrjgylaLBUPFvgc8CRzmGZaUFW+A9cJYjlRCpybU+EDMTrtXIbI77/M30sfr9CXA2NLz/acWzUradvpLb9OWxlU1H3BSmWMObGSCjVuqnWPS4DAeINzJhuRt3iSrcQYXbQdRk9qTmNzs2Sw97F4zXz+kjgX/UHraNLPGRX/+onP1Gi4Anl/YuQXxsyABGhTW9CChzD7zaRkurT1+l2XbpBTKa6UOpvfxlAWgRUkiaklCdynrrBaHrji71/7bQV/NaPrfCuHz56OA3ZnljH7NalQMAAAAASUVORK5CYII=" style={iconStyle} />
              </span>
              Member
            </Link>
          </li>

          {user.role !== 'Library Staff' && (
            <li>
              <Link to="/libraryStaffManagement" class="nav-link">
                <span className="icon">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAadJREFUSEvFluFNAzEMhd1NYJLCJMAkhUmASYBJYJNW3yk+OW4S+8JJtdQfvUv88p7tdznIjeJwI1yZAb4TkQcR+SiH5j/xt4VEFpjkzyJyLKDfIvJYgL7Ms59yoPAQGeBXETk5Ni1gu+QtOsAIGJbvhY1XMQJmPWteeiXoAVNDJOxFBlj33rfAe8Batz2Am8xbwDQREo9iC2PyUHN6ZQ0PTF1/E2OxFZiUleQeGKYwjmIGuGLtgWGrhrCn1NrlOvtXznWOqJb3M4wruS3jaITsmSww5cmopE3G3opxppsV3AInRaqXWcYta+wlxYupV+jJvQSzUpOPrxOWSKDWU4L6p37V/gMMW4CRnRrjdlGtUemqxlnz6DVZVCoOioks4ec48uiWmrDWS8HIB4YGMsPaMhmN5NAyYZS1TcveNlprv33flJqH2UaxwHa8/P6qtr0a6/MZya2paKPZzq/6I7r6ZEbEJlzHpYwXDbWMj4/osqe3S3/ZGznaOjIjQ4mArfSAj77VyIozVTeNjGUmHG9pPP1pIwLIrynpXsCZw6XWZKVOJduy6ALtz2cfpJtlSQAAAABJRU5ErkJggg==" style={iconStyle} />
                </span>
                Library Staff
              </Link>
            </li>
          )}
          <li>
            <Link to="/bookManagement" class="nav-link">
              <span class="icon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAANBJREFUSEvtltENwjAMRK+bMEqZBBiFTWAS2AQ2KTrUSCE6BTnYapDi7/aefXHam7BRTRtxUQMfAewcGnsCuJQ6CkzYzQmaeHcA+xyuwITODpOWEgSzgXcp8BIApWQVzEk5cUQ1g8+Gbg5iR5rBlqun9uT/wAan5aPNEw+w1YFh9YdjXX65rGdq+kmMiX+1N3+//+vErHR1HJm5i5oygeTLdVIhzauR8h/LoPdYxdkh4SHVVdiLiLdfw16ylfAUcT1CPXWryxVynkrUEuBcm3oBaPU5H4vQUr8AAAAASUVORK5CYII=" style={iconStyle} />
              </span>
              Books
            </Link>
          </li>
          <li>
            <Link to="/fineManagement" class="nav-link">
              <span class="icon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAS9JREFUSEvtlgFOwzAMRf9OAjsJcBK2kwAnAU6y7STbTjL0qqRyrZK46aQhVkvVpDbxc/5sxyvdyFY34moO+FnSKT2T428Ff0raJNqXpI+pAUwFAwM6ZltJ+2gAUTCyvknit2SACYC/oGgRsJW15i9/r8pfApdkBYDzs6RXSY9T5R8D12RFxhcjJ9BdAT4qvwdHZCWD390JI/sG8lswzkigmuGABLIW3dsH3QIGuHZSH2vRpu+zwfjByYNpJBH2VcARkF/zt8BERylRGtlsBl/Me0qEksJYbztazhufcKxnX2e+nBbwInXOjf+RXGQ0V1weaTgdJzukY9o+zg31nd77a5G8wJ5cmdHj2dOVVGuvbulauc12N9t9g5kkfhthWqX1+/o5PDLsXQs68HN/4B/ajm4fpEKi5gAAAABJRU5ErkJggg==" style={iconStyle} />
              </span>
              Fine Management
            </Link>
          </li>
          <li>
            <Link to="/systemLogs" class="nav-link">
              <span class="icon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAU9JREFUSEvlluFNxDAMhd9twk0CbMJNAkwCTHIwCYyCPkSqXOrYTnpShbDUX039xS/PTg/aKQ47cfUnwTeSeN5nVBupGMiDpFtJdxXsS1J5PiS9ZjaSARfgYyahpGdJT9HaCExl5yiJ8R4FTt4xeOBZaL2P+x7cA3/+mmei4OUTKj9aCXpg5K0NtAWO2ZD9IixwJDGJWIPpsrGS3ALTMi9ORlwLnHXTTrfA0dnW7ULbZOAMGapewgJH7fPWDAkk5xtP+pXJoj7OnmEGfnHO1wTjC68TaCsq/4lrSB11gcnqgb2d1+aKOqBAV71sgSOnFjDSAs5ECoxRaKlekIQ1I5MtNUAA7jIyAWfaIyPx8CVR4J7kGfDUtUhizhETjVwIfLfpR6BUNPrrY16DrTwjk4sNcCG0jm5/9Jbp5J3FCLjNwwZSEGsDW8AZc3XX/D/wN0aYQx/Hk1iyAAAAAElFTkSuQmCC" style={iconStyle} />
              </span>
              System Logs
            </Link>
          </li>
          <li>
            <Link to="/helpAndSupport" class="nav-link">
              <span class="icon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZpJREFUSEvFluFNAzEMRt1JKJvAJJRJgEmgk8AmMAp6VXzy5ezYuaqq/5zUJnn2ZzvOQe5khztxZQ/4KCJPIsL3rznO92cmiCoYyElE3gaHK/xccSIDV4C9L+rAh1Fk4+8IDPS7STqjoq7FgecIHoGB/u6hdXtCeAQmUgooMg4klw9NkWztJnIP/NkKyYMCfHWKBzD7UMqzr7Zv+a8HcwDRRobnUduM0rNxuAePoqVK35tHtrWQXH/nG7UcDuP4xXowBRXJhcRI1qtioxkpxrpHD5zJDBTTm8umQ53KumFJlY0Y+ZB61mwk2Rnq4ErqbJPn0CpvrTBHrbXUiY14VBgV6Kgwdb8bcZbjHm5bqwJl/9Vgm9cZpajqyyi1UmcVaSPWOaxVXi3Ihdf3cXZHVwHptdmDq1Hbaq46u7puZ4eERjILToeE5ix7AOhYZP1L8lhYXZXRXa2/VyWv5NydaLd++niz251OfQR7HnucYUeoq0r2yrTSM2e5zyPTvFNIts+vAlsHUEFntj7qb/agrxTR1Jqq1FOHVhb/A4KjZB8cnggAAAAAAElFTkSuQmCC" style={iconStyle} />
              </span>
              Help & Support
            </Link>
          </li>
          <li>
            <Link to="/profile" class="nav-link">
              <span class="icon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAM1JREFUSEvtlcENwjAMRV+H4FyW4A6LVDAD3FkAdkAsAneWgDNDgCylUtXi1g6UgJRIvaSWX/z9ExckWkUiLrHgCVCFQx+Bu7eAGLBAL0AZYDdg5oXHgNfArlXhBth7qv4rcDKpRdHRzDX39MsQe27HaD1+GJJ5QjqcnwNrUm8B7d8VWCkymKXWZDz1gCX5wqq/9x5ncFPZLHWvz94xV31FpoB8X5G6CamdnsGj9DhLLYMjm+uj5lqGx0Jm7yFkfrU3OB29L9dgQmtAMvAT6rdHH6hhXoMAAAAASUVORK5CYII=" style={iconStyle} />
              </span>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

} export default SideBar;