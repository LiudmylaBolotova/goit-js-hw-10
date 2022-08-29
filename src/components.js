export function showCountryList({ flags, name }) {
  return `<li class='wrap'>
                    <img width="30" height="20"   src='${flags.svg}'></>
                    <p style="font-size: 24px">&nbsp &nbsp${name}</p>
                </li>`;
}

export function showCountryCard({
  flags,
  name,
  capital,
  population,
  languages,
}) {
  return `       <div class='wrap'>
                    <img width="60" height="40"   src='${flags.svg}'></>
                    <p><b style="font-size: 36px">&nbsp &nbsp${name}</b></p>
                  </div>
                <p><b>Capital</b>: ${capital}</p>
                <p><b>Population</b>: ${population}</p>
                <p><b>Languages</b>: ${Object.values(
                  languages.map(lang => lang.name)
                )}</p>`;
}
