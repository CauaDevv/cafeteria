import { useOutletContext } from 'react-router-dom'
import { Hero } from '../components/sections/Hero'
import { Reviews } from '../components/sections/Reviews'
import { Values } from '../components/sections/Values'
import { RoastStage } from '../components/sections/RoastStage'
import { Steps } from '../components/sections/Steps'
import { Timeline } from '../components/sections/Timeline'
import { MenuHighlight } from '../components/sections/MenuHighlight'
import { AppShowcase } from '../components/sections/AppShowcase'
import { ClubBanner } from '../components/sections/ClubBanner'
import { FinalCta } from '../components/sections/FinalCta'

type HomeContext = { onCart: () => void }
export function Home() {
  const { onCart } = useOutletContext<HomeContext>()
  return <main id="conteudo"><Hero /><Reviews /><Values /><RoastStage onCart={onCart} /><Steps /><Timeline /><MenuHighlight /><AppShowcase /><ClubBanner /><FinalCta /></main>
}
