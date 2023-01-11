import './Sponsors.scss';
import { SponsorCategory } from '../../components';
import { useGetSponsors } from '../../hooks/api/sponsors';

export default function Sponsors() {
  const { data: sponsors } = useGetSponsors({});

  return (
    <div className="sponsors">
      <div className="textHeading">Sponsors</div>
      <div className="sponsors-category-list">
        {sponsors &&
          Object.keys(LEVEL_MAPPING).map((level) => {
            const _sponsors = sponsors?.filter((sp) => sp.level == level);
            if (_sponsors.length) {
              return (
                <SponsorCategory
                  key={level}
                  title={LEVEL_MAPPING[level]}
                  sponsors={_sponsors}
                />
              );
            }
          })}
      </div>
    </div>
  );
}

const LEVEL_MAPPING = {
  0: 'Powered by',
  1: 'Gaming Partner',
  2: 'Education Partner',
  3: 'Construction Partner',
  4: 'Esports Partner',
  5: 'Automobile Partner',
  6: 'Health Awareness Partner',
  7: 'Health Partner',
  8: 'Coding Partner',
  9: 'Internship Partner',
  10: 'Media partner ',
  11: 'Social media partner ',
};
