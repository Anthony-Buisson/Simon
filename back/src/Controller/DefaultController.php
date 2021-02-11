<?
namespace App\Controller;

use App\Entity\Score;
use App\Repository\ScoreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
* @Route("/api")
*/
class DefaultController extends AbstractController
{
    /**
    * @Route("/scores", name="score_all", methods={"GET"})
    *
    * @param ScoreRepository $scoreRepository
    * @return JsonResponse
    */
    public function index(ScoreRepository $scoreRepository): Response {
        $scores = $scoreRepository->findAll();
        $arrayCollection = [];
        foreach($scores as $score) {
            $arrayCollection[] = array(
                'pseudo' => $score->getPseudo(),
                'date' => $score->getDate(),
                'score' => $score->getScore(),
            );
        }
        return $this->json($arrayCollection,200, ['Access-Control-Allow-Origin' => '*']);
    }

    /**
     * @Route("/scores", name="score_new", methods={"POST"})
     *
     * @param Request $request
     * @param EntityManagerInterface $em
     * @return JsonResponse
     */
    public function addScore(Request $request, EntityManagerInterface $em): JsonResponse {
        $content = json_decode($request->getContent());
        $score = new Score();
        $score->setDate($content->date);
        $score->setPseudo($content->pseudo);
        $score->setScore($content->score);
        $em->persist($score);
        $em->flush();

        $resp = array(
            'pseudo' => $score->getPseudo(),
            'date' => $score->getDate(),
            'score' => $score->getScore(),
        );

        return $this->json($resp,200, ['Access-Control-Allow-Origin' => '*']);
    }
}
