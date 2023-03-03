import {
  Document,
  Page,
  View,
  Text,
  Image,
  PDFViewer,
  StyleSheet,
  Font,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import LinkButton from "../../components/LinkButton";

Font.register({
  family: "Ubuntu",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  body: {
    padding: 40,
  },
  section: {
    color: "blue",
    textAlign: "center",
    margin: 30,
  },
  title_view: {
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    left: "30%",
    fontWeight: "bold",
    position: "absolute",
    top: "10%",
  },
  subtitle: {
    fontSize: "15px",
    left: "30%",
    position: "absolute",
    top: "60%",
  },
  headerimg: {
    marginLeft: "15%",
    width: "13%",
    position: "relative",
  },
  data: {
    marginTop: "8%",
    fontSize: "12px",
    marginLeft: "10px",
  },
  information: {
    textAlign: "center",
    fontSize: "12px",
    marginTop: "20px",
  },
  committees: {
    marginTop: "10px",
    marginBottom: "5px",
  },
  committee: {
    marginTop: "10px",
    marginBottom: "5px",
  },
});

const PDFInvitationLetter = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.title_view}>
          {/* <Image src="http://localhost:3000/images/pe_cimer.png"></Image> */}
          <Image
            style={styles.headerimg}
            src="http://localhost:3000/pe_cimer.png"
          ></Image>
          <Text style={styles.title}>Pannon Egyetem</Text>
          <Text style={styles.subtitle}>
            Informatikai Tudományok Doktori Iskola
          </Text>
        </View>
        <View style={styles.data}>
          <Text>[Név]</Text>
          <Text>[Egyetemi beosztás]</Text>
          <Text>[Egyetem neve]</Text>
          <Text>[Tanszék neve]</Text>
          <Text>[Helyben/Távolléti]</Text>
        </View>
        <View style={styles.information}>
          <Text>Tisztelt [Egyetemi beosztás] Úr!</Text>
          <Text
            style={{
              textAlign: "justify",
              marginTop: "20px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            [Név], a Pannon Egyetem Informatikai Tudományok Doktori Iskola
            [félév] féléves PhD hallgatója (témavezetők: [], []) jelentkezett
            komplex vizsgára. A komplex vizsgára javasolt bizottságot a Doktori
            Iskola Tanácsa elfogadta. A Doktori Iskola Tanácsa javaslatát
            elfogadva kérem, hogy az alábbiakban részletezett Komplex Vizsga
            Bizottságba történő felkérést elfogadni, és a vizsga
            lebonyolításában részt venni szíveskedjék.
          </Text>
        </View>
        <View
          style={[
            styles.committees,
            {
              textAlign: "justify",
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: "12px",
              fontWeight: "bold",
            },
          ]}
        >
          <Text
            style={[
              styles.committee,
              {
                fontFamily: "Times-Bold",
              },
            ]}
          >
            Komplex vizsga bizottság:
          </Text>
          <Text style={styles.committee}>Elnök:</Text>
          <Text style={styles.committee}>Vizsgáztatók:</Text>
          <Text style={styles.committee}>Tagok:</Text>
          <Text style={{ marginTop: "10px" }}>
            A komplex vizsgán való részvételt mind személyes, mind online Teams
            formájában biztosítjuk, utóbbit az alábbi címen:
          </Text>
          <Text style={{ marginTop: "10px" }}>[Link]</Text>
          <Text style={{ marginTop: "10px", fontFamily: "Times-Bold" }}>
            A komplex vizsgára [év]. [honap] [nap]. (nap) [idopont] kezdettel az
            Egyetem I épületének [terem] termében kerül sor.
          </Text>
          <Text style={{ marginTop: "10px" }}>[idopont]</Text>
        </View>
        <View
          style={{
            position: "relative",
            fontSize: "12px",
            left: "30%",
            textAlign: "center",
          }}
        >
          <Text style={{ marginTop: "20px" }}>
            [Doktori iskola vezetoje neve]
          </Text>
          <Text>a Doktori iskola vezetője</Text>
        </View>
        <View
          style={{ textAlign: "center", marginTop: "40px", fontSize: "10px" }}
        >
          <Text style={{ fontFamily: "Times-Bold" }}>
            Pannon Egyetem | University of Pannonia
          </Text>
          <Text>
            Informatikai Tudományok Doktori Iskola | Doctoral School of
            Information Science and Technology
          </Text>
          <Text>8200 Veszprém, Egyetem utca 10.</Text>
        </View>
      </Page>
    </Document>
  );
};

const PDFView = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      <input type="text" placeholder="Keresztnev" />
      <br />
      <PDFViewer>
        <PDFInvitationLetter></PDFInvitationLetter>
      </PDFViewer>
      <br />
      <button>
        <PDFDownloadLink
          document={<PDFInvitationLetter />}
          fileName="pdf_invitation_letter.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </button>
    </>
  );
};

export default PDFView;
